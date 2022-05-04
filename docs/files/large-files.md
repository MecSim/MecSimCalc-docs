---
sidebar_label: "Large Files"
sidebar_position: 3
---

# Working with large files

If you have a _very large data file_ that is used in your Python code, it is recommended that you host this file on an external website and then fetch it when needed, instead of copying and pasting that data directly into your code.

The following instructions works for any type of file that you may need to read into your Python code.

## Step 1: Hosting the file

First, you must upload your file to a file-hosting service. You may skip this step if the file is already publicly available on the internet.

### Github

Github is a very popular free-to-use website that can host your files.

1. Go to [github.com](https://github.com).
2. Create an account (if you don't already have one).
3. On the homepage, click on **New** in the top left corner to create a new repository.
   - Repositories are similar to folders that store your files.
   - You can have more than one repositories. on your Github account.
   - ![new repo](/docs/files/new_repo.png)
4. Create a new repository:
   - Give your repository a name in "Repository name".
   - Select **Public**.
   - Finally, click on **Create repository**.
   - ![new repo](/docs/files/create_repo.png)
5. Upload files:
   - If you see this screen, click on **uploading an existing file**.
   - ![click upload](/docs/files/click_upload_1.png)
   - If you see this screen, click on **Add file** and then **Upload files**.
   - ![click upload](/docs/files/click_upload_2.png)
6. Upload your files:
   - Upload one or more files and then click on **Commit changes** to submit the files.
   - ![upload files](/docs/files/upload_files.png)
7. Your uploaded files should now show up on the homepage of your repository.
   - Your uploaded files are viewable at this url: `github.com/<username>/<repo name>/`, where `<username>` is your Github username, and `<repo name>` is the name of the Gihub repository that your files are in.
   - ![uploaded files](/docs/files/uploaded_files.png)

## Step 2: Getting the url

Before you can fetch the file, you need to know the url of the file, which must be publicly accessible.
This url can be from any website (does not have to be from Github), the following instructions will use Github.

:::caution
The url must **only** contain the file you want, and can not be a webpage that contains the file along with other assets, such as text and images.
:::

#### Github

To fetch the url of files hosted on Github:

1. Go to the Github repository with the files.
   - ![uploaded files](/docs/files/uploaded_files.png)
2. Click on the filename to go to the file. For example, clicking on _excel_file.xlsx_:
   - ![excel file](/docs/files/excel_file.png)
3. Copy the url of the webpage.
   - For example, `https://github.com/w3ichen/static/blob/main/excel_file.xlsx`
4. Add `?raw=true` to the end of the url, which references the raw data of the file.
   - For example, `https://github.com/w3ichen/static/blob/main/excel_file.xlsx?raw=true`

:::danger
You **must** add `?raw=true` to the end of the url for Github files
:::

## Step 3: Fetching the file

Once your file can be accessed on the web at a public url, you must first fetch the file into your Python code before you can use it.
There are many different functions available depending on the type of file, that will read in a file given an url.

### Text files

```python
from urllib.request import urlopen

def main(inputs):
    # Fetch file
    url = "https://github.com/w3ichen/static/blob/main/text_file.txt?raw=true"
    text_file = urlopen(url)

    # Read entire file
    lines = text_file.read().decode("utf-8")
    print(lines)

    return {"lines": lines}
```

### Excel spreadsheet files

```python
import pandas as pd

def main(inputs):
    url = "https://github.com/w3ichen/static/blob/main/excel_file.xlsx?raw=true"
    dataframe = pd.read_excel(url)
    print(dataframe)

    return {"dataframe": dataframe}
```

### Image files

```python
from PIL import Image
from urllib.request import urlopen

def main(inputs):
    img1_url = "https://github.com/w3ichen/static/blob/main/image_file.jpg?raw=true"
    img1 = Image.open(urlopen(img1_url))

    img2_url = "https://source.unsplash.com/random"
    img2 = Image.open(urlopen(img2_url))

    return {"img1": img1, "img2": img2}
```
