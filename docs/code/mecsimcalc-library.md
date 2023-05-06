---
sidebar_label: "mecsimcalc Library"
sidebar_position: 4
---

# Mecsimcalc 0.0.2 documentation

This library is designed to provide a set of functions for handling and converting various types of data, such as base64 encoded data, Pandas DataFrames, and Pillow images.

```python
from PIL import Image
import base64
import io
import pandas as pd
```

## General

### decode_file_data

```python
def decode_file_data(encoded_data, metadata)
```

#### Description:

Converts a base64 encoded file data into a file object. (e.g. converts data from **`file = inputs['fileInput']`** to a file object)

#### Arguments:

- **`encoded_data`** (str): Base64 encoded file data
- **`metadata`** (bool, optional): If True, returns a tuple of (fileData, metadata). Defaults to False

#### Returns:

- **`io.BytesIO`**: fileData
- **`(io.BytesIO, str)`**: (fileData, metadata) if metadata is True

## Tables/DataFrames

### file_data_to_dataframe

```python
def file_data_to_dataframe(file_data):
```

#### Description:

Converts a file object into a pandas DataFrame

#### Arguments:

- **`file_data`** (io.BytesIO): Decoded file data (e.g. from **`decode_file_data`**)

#### Raises:

- **`pd.errors.ParserError`**: If the file data cannot be converted to a DataFrame (e.g. if the file is not an Excel or CSV file)

#### Returns:

- **`pd.DataFrame`**: The DataFrame created from the file data

### input_to_dataframe

```python
def input_to_dataframe(file):
```

#### Description:

Converts a base64 encoded file data into a pandas DataFrame. (e.g. converts data from **`file = inputs['fileInput']`** to a DataFrame)

#### Arguments:

- **`file`** (str): Base64 encoded file data

#### Returns:

- **`pd.DataFrame`**: The DataFrame created from the file data

### dataframe_to_output

```python
def dataframe_to_output(
    df,
    DownloadText = "Download File",
    DownloadFileName = "myfile",
):
```

#### Description:

Creates an HTML table and a download link for a given DataFrame

#### Arguments:

- **`df`** (pd.DataFrame): The DataFrame to be converted
- **`DownloadText`** (str, optional): The text to be displayed on the download link. Defaults to "Download File"
- **`DownloadFileName`** (str, optional): The name of the file to be downloaded. Defaults to "myfile"

#### Returns:

- **`Tuple[str, str]`**: (HTML table, download link)

## Images

### print_img

```python
def print_img(
    img,
    metadata,
    WIDTH = 200,
    HEIGHT = 200,
    OriginalSize = False,
    DownloadText = "Download Image",
    ImageName= "myimg",
):
```

#### Description:

Converts a pillow image into an HTML image and a download link

#### Arguments:

- **`img`** (PIL.Image.Image): The pillow image to be converted
- **`metadata`** (str): The metadata of the image
- **`WIDTH`** (int, optional): The width of the HTML image. Defaults to 200
- **`HEIGHT`** (int, optional): The height of the HTML image. Defaults to 200
- **`OriginalSize`** (bool, optional): If True, the HTML image will be displayed in its original size Defaults to False. (overrides WIDTH and HEIGHT)
- **`DownloadText`** (str, optional): The text to be displayed on the download link. Defaults to "Download Image"
- **`ImageName`** (str, optional): The name of the image file when downloaded. Defaults to "myimg"

#### Returns:

- **`Tuple[str, str]`**: (HTML image, download link)

### input_to_PIL

```python
def input_to_PIL(file):
```

#### Description:

Converts a base64 encoded file data into a pillow image. (e.g. converts data from **`file = inputs['fileInput']`** to a pillow image)

#### Arguments:

- **`file`** (str): Base64 encoded file data

#### Returns:

- **`Tuple[PIL.Image.Image, str]`**: (pillow image, metadata)
