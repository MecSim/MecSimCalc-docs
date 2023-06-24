---
sidebar_label: "Conditional Input"
sidebar_position: 5
---

# Conditional Input

| :trophy: This is a [premium](https://mecsimcalc.com/premium) feature |
| -------------------------------------------------------------------- |

The following provides a detailed description about the conditional input feature

## How does it work?

For each input a set of rules (conditions) can be created. Each rule is composed of 3 parts:

1. Input

2. Operator

3. Value

If the rule is TRUE the input will be visible to the user running your app.  
Multiple rules are combined using AND i.e. all rules have to be TRUE in order for the input to be visible  
If ANY rule is FALSE then the input will be hidden

## Example

When editing an input, check the conditional input box in order to start creating rules

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/number_input.png)

</div>

We will create a rule, where this input (slider) will only be visible if input checkbox is TRUE (checked)

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/number_input.png)

</div>

:::caution
When editing an input, don't forget to click on **APPLY CHANGES** at the bottom of the screen to save your work
:::

### Test it out for youself

Test out the rule we created above for yourself!  
Remember: If the checkbox is TRUE (checked) the slider will become visible

<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/4620929/map_geospatial_data" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>

:information_source: **Note:**
We currently do not offer creating a rule based off of input types date, file, rich text
