---
sidebar_label: "Images and Graphs"
sidebar_position: 4
---

# Images, Graphs, and Image Files

## Importing and Exporting Images

The [Working with Images](https://mecsimcalc.com/app/0672426/working_with_images) _**app**_ is used here for demonstration. The _**app**_ imports an image, changes its width and height to 200 using the `.thumbnail` function available in the `PIL` python library. One [`FileInput`](../Inputs/Input-Types) is used with variable name set to `file` and the **Accept** option set to `image/*` to limit the uploaded files to those with recognized image extensions. The inputs page is shown in the figure below:

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/imageinput.png)

</div>

Two utility functions are provided, one to generate an embeddable image using the `<img>` HTML tag and another to generate a downloadable file using the `<a>` HTML tag. The python `io` library is used to create and edit file objects. The code used is given below:

```python
from PIL import Image
import base64
import io

def Image_File(data,extension,FileName):
    return "<a href='" + data + "' download='"+FileName+"." + extension + "'>Download Image</a>"
def Image_Embed(data):
    return "<img src='" + data + "'>"

def main(inputs):
    [meta, data] = inputs['file'].split(";base64,")
    metadata = meta + ";base64,"

    # Decode the file data
    file_data = io.BytesIO(base64.b64decode(data))

    # Convert the file data into a Pillow's Image
    img = Image.open(file_data)

    # Manipulate the image
    WIDTH = HEIGHT = 200
    img.thumbnail((WIDTH, HEIGHT))  # resize

    # Get downloadable data
    buffer = io.BytesIO()
    img.save(buffer, format=img.format)
    encoded_data = metadata + base64.b64encode(buffer.getvalue()).decode()

    imagefile=Image_File(encoded_data,img.format,"MyImage")
    image=Image_Embed(encoded_data)
    return {
        # Display image using img tag
        "Image": image,
        # Download using <a> tags
        "File": imagefile,
    }
```

Finally, the output page has the following lines:

```
Displaying Image
{{ outputs.Image}}

Downloading Image
{{ outputs.File}}
```

## Generating Graphs

Graphs generated using `matplotlib` python library can be converted into an image and embedded in the output page using the `<img>` HTML tag. [Example 2](../Getting-Started/Example2) in the introduction section provides a detailed example that the _**developer**_ can follow.
