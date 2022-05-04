---
sidebar_label: "Tools"
sidebar_position: 3
---

# Tools

The **Code** step provides the _**developer**_ with an in-browser code editor equipped with syntax highlighting, intellisense, **Code Compare**, and **Debugging**. The **Code Compare** functionality allows the _**developer**_ to compare the current (draft) version of the code with the published version (if the app is published). **Debugging** allows the _**developer**_ to run the code with some test inputs to see the output values and to debug runtime errors.

## Code Compare

Once an _**app**_ is published, the published version of the code stays unaltered until you publish a newer version which will overwrite the previously published code. The _**developer**_ can still edit a published _**app**_ and alter the code, however, the version of the altered code stays in "draft" mode until the _**developer**_ publishes the new version. **Code Compare** allows the _**developer**_ to compare the current "draft" version with the already "published" version of the _**app**_.

:::note
If the _**app**_ does not have a published version (never published), then **Code Compare** is not useful.
:::

As an example, consider the published _**app**_, [Text Spaces Manipulation Function](https://mecsimcalc.com/app/6383921/text_spaces_manipulation_function). In the current published version, the code strips the input text of all spaces. The image below shows the change made to the "draft" version of the _**app**_'s code that doubles the spaces within the text. The version of the code on the right-hand-side is the current "draft" version while the one on the left-hand-side is the published version. The published version will only be replaced if the _**developer**_ proceeds to **Step 6** and clicks on **Publish**.

<div style={{textAlign: 'center'}}>

![img alt](/docs/code/code_compare.png)

</div>

## Debugging

The **Code** step provides the _**developer**_ with an in-browser code debugger. In addition to viewing error messages and tracebacks, the _**developer**_ can also view the outputs from `print()`.

As an example, the code below is from the published _**app**_ [Text Spaces Manipulation Function](https://mecsimcalc.com/app/6383921/text_spaces_manipulation_function), which uses the `print` function whose outputs can be viewed in the debugger but will not be visible when the _**app**_ is used by the _**user**_.

```python
def main(inputs):
    t = inputs['input_0']
    s = t.replace(" ","")
    print("Original Text:",t)
    print("New Text:",s)
    return {"Original Text": t, "Stripped Text":s}
```

Below is an image of the debugger with the printed output:

<div style={{textAlign: 'center'}}>

![img alt](/docs/code/debugger.png)

</div>
