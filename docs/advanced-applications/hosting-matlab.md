---
sidebar_label: "Hosting Matlab"
sidebar_position: 4
---

# Hosting Matlab On MecSimCalc

| :trophy: This feature requires a [premium membership](https://mecsimcalc.com/account) |
| ---------------------------------------------------------------------------------- |

**MecSimCalc** runs apps through Amazon Web Services. Each app is run through its docker image, and its dockerfile for the docker image can be viewed from its code environment. For more information, visit the [code environment page](../code/environments).

## Overview

A Matlab console app can be turned into a standalone application (an executable) on MATLAB Online. This standalone application can then be added in a docker image. This docker image can be uploaded onto Github or Docker Hub, then retrieved in the dockerfile in MecSimCalc's code environment to be used in your MecSimCalc app.

The Matlab app needs to be a **console app** for it to be integrated onto MecSimCalc, so there should be no graphical user interface.

## MecSimCalc App Inputs

Make a new app on MecSimCalc and define the inputs in the [inputs step](../inputs/overview). 

## MATLAB Online

Upload the Matlab app project folder, with all its files, onto [MATLAB Drive](https://www.mathworks.com/products/matlab-drive.html). Open the project in Matlab Online:
![img alt](/docs/advanced-applications/hosting-matlab/open-matlab-online.png) 

Navigate to the directory containing your main script that accepts user inputs and returns the app's outputs (should be an .m file). Then execute this command in the Command Window:
```
mcc -m [main_script].m
```
**replacing** [main_script] with your main script's name. 

After a few minutes, multiple files should be made in the directory. There are only two files you need, the files called [main_script] (it has no file extension) and run_[main_script].sh where [main_script] is your main script's name. Download these two files.

## Dockerfile

On your local machine, in the directory that has the two files [main_script] and run_[main_script].sh, make a new file called Dockerfile (give no file extension). Copy this code into the Dockerfile:
```
FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y wget software-properties-common gnupg2 winbind curl dos2unix && \
    apt-get update && \
    apt-get install -y python3.8 python3.8-venv python3.8-dev && \
    apt-get install -y python3-pip && \
    update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 1 && \
    apt-get update && apt-get install -y \
    software-properties-common \
    gnupg2 winbind xvfb curl \
    wget \
    sudo \
    unzip \
    libgconf-2-4 \
    libxt6 \
    && rm -rf /var/lib/apt/lists/* && \
    pip3 install awslambdaric && \
    curl -Lo /usr/local/bin/aws-lambda-rie https://github.com/MecSimCalc/aws-lambda-runtime-interface-emulator/raw/msc-v1.13/bin/aws-lambda-rie && \
    chmod +x /usr/local/bin/aws-lambda-rie 

# Set LAMBDA_TASK_ROOT environment variable
ENV LAMBDA_TASK_ROOT=/var/task

# Set LAMBDA_RUNTIME_DIR environment variable
ENV LAMBDA_RUNTIME_DIR=/var/runtime

RUN mkdir /mcr-install && \
    mkdir /opt/mcr && \
    cd /mcr-install && \
    wget --no-check-certificate -q https://ssd.mathworks.com/supportfiles/downloads/R2024a/Release/4/deployment_files/installer/complete/glnxa64/MATLAB_Runtime_R2024a_Update_4_glnxa64.zip && \
    unzip -q MATLAB_Runtime_R2024a_Update_4_glnxa64.zip && \
    rm -f MATLAB_Runtime_R2024a_Update_4_glnxa64.zip && \
    ./install -destinationFolder /opt/mcr -agreeToLicense yes -mode silent && \
    cd / && \
    rm -rf mcr-install  

COPY run_[main_script].sh ${LAMBDA_TASK_ROOT}/
COPY [main_script] ${LAMBDA_TASK_ROOT}/
COPY app.py ${LAMBDA_TASK_ROOT}/ 
COPY lambda-entrypoint.sh /
COPY download_and_run.py ${LAMBDA_TASK_ROOT}/

# !!! Remove these next two lines if on a non-windows machine !!!   
RUN dos2unix /lambda-entrypoint.sh && \
    dos2unix ${LAMBDA_TASK_ROOT}/run_[main_script].sh

RUN sudo chmod +x ${LAMBDA_TASK_ROOT}/run_[main_script].sh && \
    sudo chmod +x ${LAMBDA_TASK_ROOT}/[main_script]

RUN mkdir -p /var/adm \
    /var/cache \
    /var/db \
    /var/empty \
    /var/games \
    /var/gopher \
    /var/kerberos \
    /var/lang \
    /var/lib \
    /var/local \
    /var/log \
    /var/nis \
    /var/opt \
    /var/preserve \
    /var/rapid \
    /var/runtime \
    /var/spool \
    /var/task \
    /var/telemetry \
    /var/tmp \
    /var/tracer \
    /var/yp

COPY var/runtime/* /var/runtime/
COPY var/lang/ /var/lang/
COPY var/* /var/

RUN sudo chmod +x /var/runtime/bootstrap

ENTRYPOINT ["/lambda-entrypoint.sh"]
CMD ["app.handler"]

# WORKDIR as /tmp, which will be the only writable directory
WORKDIR /tmp
# ENV Environment Variables
# - MPLCONFIGDIR to speed up the import of Matplotlib and better support multiprocessing.
ENV MPLCONFIGDIR=/tmp
# - TMPDIR to declare the temporary directory
ENV TMPDIR=/tmp
# - API_ACCESS_KEY is the SECRET key used to access the mecsimcalc private API 
ARG API_ACCESS_KEY
ENV API_ACCESS_KEY=$API_ACCESS_KEY
```
**replacing** [main_script] with your main script's name. 

:::info
Delete this code in your Dockerfile if your machine is not Windows:
```
# !!! Remove these next two lines if on a non-windows machine !!!   
RUN dos2unix /lambda-entrypoint.sh && \
    dos2unix ${LAMBDA_TASK_ROOT}/run_[main_script].sh
```
:::

Next, download all three files in [here](https://drive.google.com/drive/folders/1QjLFHh_nCVeyptzpeGm8OmFW4qJLg5uW?usp=drive_link) and move them into the directory the Dockerfile is in on your local machine. The files lambda-entrypoint.sh and app.py are not to be changed.

The download_and_run.py file has pre-existing template code in it. The purpose of this file is to get the inputs from the MecSimCalc app's [inputs step](../inputs/overview), and feed the inputs to the Matlab standalone application. This file **needs** to be edited. The code that goes in the main(inputs) function is the same code the developer writes in the main(inputs) function in the MecSimCalc app's [code step](../code/overview).

:::info
This is a way to run the Matlab standalone application, with var1 and var2 as example variables:
```
os.system(f"/var/task/run_[main_script].sh /opt/mcr/R2024a {var1} {var2}")
```
Replace [main_script] with your main script's name and change/add variables as needed for your application.
:::

**Download** this [folder](https://drive.google.com/drive/folders/1mk7EZHsShfNsXkCjIno-Z48K7PEhi_A6?usp=drive_link) and move the folder into the directory the Dockerfile is in.

## Building the Docker Image

For this step, you will need to contact MecSimCalc for an API Access Key, your app will not run on MecSimCalc without this.

Ensure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed on your machine. Open Docker Desktop. Ensure the Docker is using Linux Containers. It will be using a linux container if it says "Switch to Windows Containers..." when you right click on the Docker Desktop icon in your local machine's system tray (on Windows):

![img alt](/docs/advanced-applications/hosting-matlab/linux-containers.png)


Ensure the Docker Engine is running (green bar on the bottom left side of the Docker Desktop program).

Open a terminal in the directory your Dockerfile is. Then, run this command to build the docker image:

```
docker build -t [your-docker-image-name] --build-arg API_ACCESS_KEY=[contact-mecsimcalc-for-key] .
```
**replacing** [your-docker-image-name] with a custom name and [contact-mecsimcalc-for-key] with the API Access Key that MecSimCalc will provide.

Run this command:
```
docker run -it [your-docker-image-name] /bin/bash
```
to ensure the output is:
![img alt](/docs/advanced-applications/hosting-matlab/run-output.png)

:::info
Press CTRL+C (on Windows) to end the runtime.
:::

## Github Packages
As a prerequisite, a Github account is needed. Generate a Github [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) with write:package, read:package, and delete:package scopes. Login to your Github Container Registry through running this command in the terminal:
```
echo "[personal-access-token]" | docker login ghcr.io -u [github-username] --password-stdin
```
**replacing** [personal-access-token] with your Github Personal Access Token and [github-username] with your Github username.

Next, to upload the docker image to Github packages, run these commands in the terminal:
```
docker tag [your-docker-image-name] ghcr.io/[your-username]/[your-package-name]:latest
docker push ghcr.io/[your-username]/[your-package-name]:latest
```
**replacing** [your-docker-image-name] with the custom name you named in the docker build command, [your-username] with your Github username, and [your-package-name] with a custom name for your package.

Sign into Github. Click on Your Profile:

![img alt](/docs/advanced-applications/hosting-matlab/profile.png)

Navigate to the Packages tab:

![img alt](/docs/advanced-applications/hosting-matlab/packages.png)

Click on your package (the custom name given to replace [your-package-name] in the command above), click on Package settings. Scroll down to the Danger Zone and change package visibility to public:
![img alt](/docs/advanced-applications/hosting-matlab/public-package.png)


## MecSimCalc Code Environment

:::info
MecSimCalc premium is needed for this step.
:::

Next, open your MecSimCalc app and navigate to the app's [code step](../code/overview). Click on the [code environment](../code/environments) on the sidebar, and make a new environment.

Click on the green Dockerfile button and copy this code into that Dockerfile on MecSimCalc, after line 10 (delete the pre-existing code after line 10):
```
FROM --platform=linux/x86_64 653199784281.dkr.ecr.us-east-1.amazonaws.com/python:3.8 AS buildingpython

# Print all environment variables to a file
RUN printenv > /env_vars.txt
FROM ghcr.io/[your-username]/[your-package-name]:tag
COPY --from=buildingpython /env_vars.txt /env_vars.txt
# Set environment variables
RUN set -o allexport; source /env_vars.txt; set +o allexport
RUN rm /env_vars.txt
```
**replacing** [your-username] with your Github username and [your-package-name] with your package that was uploaded to Github packages.

Build the environment (may take more than 15 minutes, depending on the size of the package) and then select it as the environment for the app.

## MecSimCalc App Outputs

Enter the app output variables in the app's [outputs step](../output/overview) from the return statement in download_and_run.py, in the form:
```
{{ outputs.[variable-name] }}
```

## Running the App

Finally, test the app. 

Note that Compute Resources **will** be needed, otherwise the app will fail to run. As an example, one can use Compute Resources by increasing the app's timeout to 6 minutes:

![img alt](/docs/advanced-applications/hosting-matlab/compute-resources.png)
