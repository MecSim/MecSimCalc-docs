---
sidebar_label: "Working with large files"
sidebar_position: 7
---

# Working with large files

If you have a <em>very large data file</em> that is used in your Python code, it is recommended to host this file on an external website and then fetch it when needed, instead of copying and pasting data into your code.

You can do this for any file that you may need to read into your Python code

## Step 1: Hosting the file

First, you must upload your file to a file hosting service. You may skip this step if the file is already available on the internet.

### Github

Github is a free to use website that can host your files.

1. Go to [github.com](https://github.com)
2. Create an account (if you don't already have one)
3. On the homepage, click on <strong style={{'color': 'green'}}>New</strong> in the top left corner to create a new repository
   - Repository are similar to folders that store your files
   - ![new repo](/docs/Objects/new_repo.png)
4. Create a new repository
   - Give your repository a name in "Repository name"
   - Select **Public**
   - Finally, click on **Create repository**
   - <img src="/docs/Objects/create_repo.png" width="600px"/>
5. Click on upload files
   - If you see this screen, click on **uploading an existing file**
   - ![click upload](/docs/Objects/click_upload_1.png)
   - If you see this screen, click on **Add file** and then **Upload files**
   - ![click upload](/docs/Objects/click_upload_2.png)
6. Upload your files
   - Upload one or more files and then click on **Commit changes**
   - ![upload files](/docs/Objects/upload_files.png)
7. Your uploaded files should show up on the homepage of your repository
   - Your uploaded files are viewable at this url: `github.com/<username>/<repo name>/`
   - ![uploaded files](/docs/Objects/uploaded_files.png)

## Step 2: Fetching the file

Once your file can be accessed on the web using a url, you must then fetch the file into your Python code in order to read it.

### Getting the url

In order to fetch the file, you need the url, which must be publicly accessible.
This url can be from anywhere, the following instructions will

#### Github

To fetch the url of files hosted on Github:

1. Go to the Github repository with the files
   - ![uploaded files](/docs/Objects/uploaded_files.png)
2. Click on the file name to select the file. For example, clicking on _excel_file.xlsx_:
   - ![excel file](/docs/Objects/excel_file.png)
3. Copy the url of the page
   - For example, `https://github.com/w3ichen/static/blob/main/excel_file.xlsx`
4. Add `?raw=true` to the end of the url, which fetches the raw data of the file
   - For example, `https://github.com/w3ichen/static/blob/main/excel_file.xlsx?raw=true`

:::caution
You **must** add `?raw=true` to the end of the url for github files
:::

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
