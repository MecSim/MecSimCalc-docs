---
sidebar_label: "Images"
sidebar_position: 5
---

# Images

This page will cover importing and exporting images

<div style={{width: "100%", height: "550px", overflow: "hidden"}}>
<iframe src='https://mecsimcalc.com/app/0672426/working_with_images' style={{position:"relative", left:"-45px", top:"-48px"}} width="100%" height="550" title="MecSimCalc" frameBorder="0"></iframe>
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
import mecsimcalc as msc

def main(inputs):
    # Get the file object from the input
    image_input = inputs['file']

    # Convert the file object to a PIL object
    PIL_object = msc.input_to_PIL(image_input)

    # generate an html image tag, a download link at the original size
    image_original, download_link_original = msc.print_image(PIL_object, original_size=True, download=True)

    # generate an html image tag, a download link and resizing the image
    image_resized, download_link_resized = msc.print_image(PIL_object, width=500, height=500, download=True)

    return {
        "original_image": image_original, # Display original image
        "original_download": download_link_original # Download link for original image
        "resized_image": image, # Display resized image
        "resized_download": download_link, # Download resized image
    }
```

Finally, the output page has the following lines:

```
Displaying original image
{{ outputs.original_image }}

Downloading original image
{{ outputs.original_download }}

Displaying resized image
{{ outputs.resized_image }}

Downloading resized image
{{ outputs.resized_download }}
```
