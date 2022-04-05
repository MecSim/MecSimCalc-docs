---
sidebar_label: "Tools"
sidebar_position: 3
---

The **MecsimCalc** platform provides the _**developer**_ with an in-browser code editor equipped with syntax highlighting, intellisense, **Code Compare**, and **Debugging**. The **Code Compare** functionality allows the _**developer**_ to compare the current (draft) version of the code with the published version. **Debugging** allows the _**developer**_ to run the code with some test inputs to see the output values and to debug runtime errors.

## Code Compare

Once an _**app**_ is [published](../Getting-Started/Quick-overview#step-6-preview), the version of the code in the published version stays unaltered. The _**developer**_ can still edit a published _**app**_ and alter the code, however, the version of the altered code stays in a "draft" mode until the _**developer**_ publishes the new version. **Code Compare** allows the _**developer**_ to compare the current "draft" version with the already "published" version of the _**app**_. As an example, consider the published _**app**_ [Text Spaces Manipulation Function](https://mecsimcalc.com/app/6383921/text_spaces_manipulation_function). In the current published version, the code strips the input text off any spaces. The image below indicates that the current "draft" version of the _**app**_'s code attempts to double the spaces within the text. The version of the code on the right-hand-side is the current "draft" version while the one on the left-hand-side is the published version. The published version will only be replaced if the _**developer**_ proceeds to **Step 6** and clicks on **Publish**.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/codeompare.png)

</div>

## Debugging

**MecsimCalc** platform provides the _**developer**_ with an in-browser code debugger. In addition to viewing error messages, the _**developer**_ can use functions such as `print` in different locations within the code which the debugger will print. As an example, the code below is a working version of the published _**app**_ [Text Spaces Manipulation Function](https://mecsimcalc.com/app/6383921/text_spaces_manipulation_function). This version of the code uses `print` function whose output can be viewed in the debugger but will not be visible when the _**app**_ runs in the browser.

```python
def main(inputs):
    t=inputs['input_0']
    s=t.replace(" ","")
    print("Original Text:",t)
    print("New Text:",s)
    return {"Original Text": t,"Stripped Text":s}
```

Below is a picture of the debugger with the printed output

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/debugger.png)

</div>
