---
sidebar_label: "Images and Graphs"
sidebar_position: 4
---

# Images and Graphs

## Importing and Exporting Images

<div style={{width: "100%", height: "550px", overflow: "hidden"}}>
<iframe src='https://mecsimcalc.com/app/0672426/working_with_images' style={{position:"relative", left:"-45px", top:"-48px"}} width="100%" height="550" title="MecSimCalc" frameborder="0"></iframe>
</div>

This _**app**_ imports an image, changes its width and height to 200 using the `.thumbnail` function from the Python Image Library (PIL). One [`FileInput`](../inputs/input-types) is used with a variable name of `file` and the **Accept** option is set to `image/*` in order to limit the uploaded files to those with recognized image extensions. The inputs page is shown in the image below:

<div style={{textAlign: 'center'}}>

![img alt](/docs/output/image_input.png)

</div>

Two utility functions are provided:

- `Image_File` generates a downloadable file using the `<a>` HTML tag.
- `Image_Embed` generates an embeddable image using the `<img>` HTML tag .

The Python `io` library is used to create and edit file objects. The code used is given below:

```python
from PIL import Image
import base64
import io

def Image_File(data,extension, filename):
    return "<a href='" + data + "' download='" + filename + "." + extension + "'>Download Image</a>"
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

    imagefile = Image_File(encoded_data,img.format,"MyImage")
    image = Image_Embed(encoded_data)
    return {
        "Image": image, # Display image using img tag
        "File": imagefile, # Download using <a> tags
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

Graphs generated using the `matplotlib`Python library can be converted into an image and embedded in the output page using the `<img>` HTML tag. [Example 2](../getting-started/example-2) in the introduction section provides a detailed example that the _**developer**_ can follow.
