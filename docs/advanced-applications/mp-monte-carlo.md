---
sidebar_label: "Parallelizing MC Simulation"
sidebar_position: 3
---

# Parallelizing Monte Carlo Simulation

| :trophy: This is a [premium](https://mecsimcalc.com/pricing) feature |
| -------------------------------------------------------------------- |

**MecSimCalc** supports multiprocessing when higher compute resources are chosen. For more information, visit the [code optimization page](../code/optimization).

## Overview

<!-- Monte Carlo simulation is a computational technique used to estimate the probability of different outcomes in a process that involves variables that change by random amounts. For computations where the underlying system is too complex to be solved analytically, the Monte Carlo simulation can be used to simulate several outcomes with various random input variables. This allows us to build a general model that reflects the results of the system without solving the system.  -->

The Monte Carlo Simulation can be parallelized by implementing [multiprocessing](../code/optimization). This can significantly enhance the speed of the Monte Carlo Simulation.  
**Note: This only applies to greater than 2 vCPUs and requires subscription to higher compute resources on MecSimCalc.**
![alt text](image.png)

Here is a comparison in the time the program takes to run between using multiprocessing and running the program serially in a simple Monte Carlo Simulation program with O(n) time complexity:  
![alt text](image-1.png)

<!-- insert plot image -->

Multiprocessing will exponentially reduce the time taken to run the program as the number of CPU cores increase, whereas the execution time remains constant without multiprocessing.

Here is another comparison between sequential and parallel execution time in a Monte Carlo Simulation program used to determine strain demand in pipes subject to ground movement. More details can be found [here](https://era.library.ualberta.ca/items/f8d6a447-85af-452a-b905-4b22415bc925).  
![alt text](image-2.png)

<!-- insert plot image -->

Similar to the previous example, parallelization significantly reduces program execution time if multiple CPU cores are available.

## Implementing Multiprocessing

This tutorial requires a working Monte Carlo simulation program implemented on MecSimCalc. For more information on how to port your Python program to MecSimCalc, visit [Getting Started](../getting-started/create).

1. **Modularize the Program**  
   Arrange the program into functions so there is a function that runs one iteration of the Monte Carlo Simulation. This will make it easier to implement multiprocessing.

2. **Import the Multiprocessing Module**

```python
import multiprocessing
```

3. **Create a Shared Object**  
   An object with shared memory between the processes will be required to store any function return data. The shared object can be any data type and must be created in main. This can be done using the manager object from the multiprocessing module.

The example below creates a list with shared data that can be accessed between all processes.

```python
def main(inputs):
    ### Other Code
    manager = mp.Manager() # This is case-sensitive
    data = manager.list()
    ### Other Code
```

4. **Count the Number of CPU Cores**
   This step can be skipped for those who want a specific number of processes. Otherwise, we can use this to count the optimal number of processes.  
   _Note: the number of CPU cores is dependent on the selection of vCPUs in MecSimCalc_

```python
def main(inputs):
    ### Other Code
    num_cores = multiprocessing.cpu_count()
    ### Other Code
```

## Sample Implementation of Multiprocessing
