---
sidebar_label: "Optimization"
sidebar_position: 4
---

# Code Optimization

Code that provides correct output but runs slowly can be improved in different ways depending on the actions executed by the code.
This page will cover different methods and code snippets that can be used to improve the runtime of code. These methods include:

1. [Vectorization](#vectorization)
2. [Multiprocessing](#multiprocessing)
3. [Multithreading](#multithreading)
4. [Compiling](#compiling)

### Identifying Slowdowns

The **_developer_** needs to first identify certain problems in the code that cause slowdown. Identifying slowdown in a program is most easily done by timing functions to see which functions are taking up most of the runtime.

Here is an example of a simple decorator function that times a function and prints its total runtime:

```python
import time

def timer(func):
    """
    Decorator function for timing other functions, prints out name of function and its
    runtime in seconds.
    func is a function input.
    Returns the output of the initial function call.
    """
    def wrapper_function(*args, **kwargs):
        k = time.perf_counter()
        val = func(*args,  **kwargs)
        print(func.__name__, " took: ", (round(time.perf_counter() - k, 3)), " seconds")
        return val
    return wrapper_function
```

:::tip
`timer` will be used in the following code snippets to time functions, so make sure to add it to your code.
:::

This can time functions by adding a simple decorator above the function definition:

```python
@timer
def my_func(inputs):
	...
	return(outputs)
```

Once the problems have been identified the **_developer_** can attempt to solve them with some of the following solutions.

:::caution
It is also **VERY** important to continuously test the code as some of these solutions are implemented, both to make sure the correctness of the code does not change, but also that attempts to improve performance don't actually make it slower.
:::

## Vectorization

Vectorization (Array programming) is the programming paradigm in which a programmer applies operations to an entire dataset at once rather than accessing each individual value and applying operations one at a time.
This is most useful when dealing with large datasets and when dealing with doing slow operations such as square rooting.

### Numpy

Numpy is a very commonly used Python package primarily used for “scientific computing”. The core of the package is its [`ndarray`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html) which is an n-dimensional array which uses homogenous (the same) data types. This allows for very fast calculations when doing operations using numpy arrays.

- [Numpy Documentation](https://numpy.org/doc/stable/reference/index.html)

For example, if you wanted to square root every value in a list, you could do it using a for loop (which is slow), whereas using numpy you can do it in one line: `np.sqrt(array)`:

```python
import numpy as np
import math


def main(inputs):
    # Create test array
    length = 10000000
    array = [0] * length
    for i in range(length):
        array[i] = i

    Vec_Sqrt_Array = vectorized_sqrt(array) # vectorized_sqrt will be faster if a
                                            # ctypes array or a numpy array are used
    Loop_Sqrt_Array = loop_sqrt(array)
    print(Vec_Sqrt_Array == Loop_Sqrt_Array)

	# Returns all True
    return {}


@timer
# vectorized_sqrt  took:  1.675  seconds
def vectorized_sqrt(array):
    """
    vectorized_sqrt uses vectorization to do square roots on a Python list or
    numpy ndarray.
    array can be either a Python list or numpy ndarray.
    Returns a Python list with square rooted values.
    """

    sqrt_array = [0]*len(array)
    sqrt_array = np.sqrt(array)
    return(sqrt_array)


@timer
# loop_sqrt  took:  12.111  seconds
def loop_sqrt(array):
    """
    loop_sqrt uses a for loop to do square roots on a Python list or numpy ndarray.
    array can be either a Python list or numpy ndarray.
    Returns a Python list with square rooted values.
    """

    sqrt_array = [0]*len(array)
    for i in range(len(array)):
        sqrt_array[i] = math.sqrt(array[i])
    return(sqrt_array)
```

### Pandas

Pandas is another powerful Python library often used for data manipulation and analysis, built on top of NumPy. It is particularly useful when handling tabular data with heterogeneously-typed (different types) columns.

- [Pandas Documentation](https://pandas.pydata.org/pandas-docs/stable/reference/index.html)

The [`DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html) object in Pandas is highly optimized and provides vectorized operations much like NumPy. When dealing with datasets that can fit into memory and require complex manipulations, filtering, or grouping, Pandas can be a faster option.

Here's a simple example demonstrating how Pandas can be used for efficient calculations:

```python
import pandas as pd

def main(inputs):
    # Create a Pandas DataFrame
    length = 10000000
    df = pd.DataFrame({'col1': range(length), 'col2': range(length)})

    # Perform square root operation
    sqrt_df = pandas_sqrt(df)

@timer
def pandas_sqrt(df):
    """
    Uses Pandas DataFrame for vectorized square root operation.
    df is a Pandas DataFrame containing numerical data.
    Returns a new DataFrame with the square rooted values.
    """

    return df.apply(lambda x: x ** 0.5)
```

## Multiprocessing

Multiprocessing is a form of parallel computing that attempts to utilize all the possible computing power available to a program by splitting tasks into separate processes. This method tends to be better if you are doing many operations in a single process as creating a process requires time and resources. Multiprocessing also works better when using more CPU cores.
For all multiprocessing libraries, it is good practice to use `if __name__ == '__main__':` to prevent subprocesses from creating more subprocesses.

:::tip
Multiprocessing and Multithreading are similar, so here's an analogy to help you remember the difference:

- Multithreading: One kitchen, multiple chefs. They share tools and coordinate, making it efficient but sometimes complex.
- Multiprocessing: Multiple kitchens, each with one chef. No sharing or coordination needed, but requires more resources.

In multithreading, threads share the same memory but need to coordinate. In multiprocessing, each process has its own memory but is more resource-intensive.
:::

### Concurrent Futures

Concurrent futures uses a [`ProcessPoolExecutor`](https://docs.python.org/3/library/concurrent.futures.html#processpoolexecutor) as a way to automatically start subprocesses. Concurrent futures is a very beginner friendly library compared to manually starting new subprocesses.

- [Concurrent Futures Documentation](https://docs.python.org/3/library/concurrent.futures.html)

For example:

```python
import concurrent.futures
import math

def main(inputs):
    Nested_list = [[0]*10000000]*4

    concurrent_sqrt(Nested_list)
    nested_loop_sqrt(Nested_list)
    return {}

@timer
# concurrent_sqrt  took:  5.528  seconds
def concurrent_sqrt(Nested_list):
    """
    concurrent_sqrt uses multiprocessing to do square roots on values within nested list.
    Nested_list is a list of lists of numbers.
    Returns a map with square rooted values.
    """
    with concurrent.futures.ProcessPoolExecutor() as executor:
         results = executor.map(do_something, Nested_list)
    return results

def do_something(array):
    """
    do_something iterates through an array and square roots its elements in a for loop.
    array is a Python list.
    A Python list is returned.
    """
    new_array = [0] * len(array)
    for i in range(len(array)):
        new_array[i] = math.sqrt(i)

    return new_array

@timer
# nested_loop_sqrt  took:  6.635  seconds
def nested_loop_sqrt(Nested_list):
    """
    nested_loop_sqrt takes a list of lists of numbers and square roots them in a nested
    for loop.
    Nested_list is a list of lists of numbers.
    This function returns a list of lists of square rooted numbers.
    """
    new_nested_list = [[0]*len(Nested_list[0])]*len(Nested_list)
    itrA = 0

    for array in Nested_list:
        itrB = 0
        for i in array:
            new_nested_list[itrA][itrB] = math.sqrt(i)
            itrB += 1
        itrA += 1
    return(new_nested_list)
```

### Manual Multiprocessing

Using the multiprocessing library in Python requires the **developer** to manually create and start the processes they need. It is generally not much more difficult to use but there are situations where the increased freedom in the library leads to increased complexity.

- [Multiprocessing Documentation](https://docs.python.org/3/library/multiprocessing.html)

For example,

```python
from multiprocessing import Process

def main(inputs):
    Nested_list = [[0]*10000000]*4

    multiprocess_sqrt(Nested_list)
    nested_loop_sqrt(Nested_list)
    return {}

@timer
# multiprocess_sqrt  took:  4.96  seconds
def multiprocess_sqrt(Nested_list):
    """
    multiprocess_sqrt uses multiprocessing to do square roots on values in a nested list.
    Nested_list is a list of lists of numbers.
    """
    processes = [0] * len(Nested_list)

    for i in range(len(Nested_list)):
        p = Process(target=do_something, args=[Nested_list[i]])
        p.start()
        processes[i] = p

    for process in processes:
        process.join()


def do_something(array):
    """
    do_something iterates through an array and square roots its elements in a for loop.
    array is a Python list.
    A Python list is returned.
    """
    new_array = [0] * len(array)
    for i in range(len(array)):
        new_array[i] = math.sqrt(i)

    return new_array

@timer
# nested_loop_sqrt  took:  5.855  seconds
def nested_loop_sqrt(Nested_list):
    """
    nested_loop_sqrt takes a list of lists of numbers and square roots them in a nested
    for loop.
    Nested_list is a list of lists of numbers.
    This function returns a list of lists of square rooted numbers.
    """
    new_nested_list = [[0]*len(Nested_list[0])]*len(Nested_list)
    itrA = 0

    for array in Nested_list:
        itrB = 0
        for i in array:
            new_nested_list[itrA][itrB] = math.sqrt(i)
            itrB += 1
        itrA += 1
    return(new_nested_list)
```

## Multithreading

Multithreading allows a program to run multiple tasks concurrently but within the same process. Unlike multiprocessing, all threads share the same memory space. This method is useful when the program is doing things that are not CPU-reliant, such as I/O-bound tasks like reading/writing files, networking activities, or any other kind of task that involves waiting. It can also be useful for some lightweight parallel computing.

### Concurrent Futures

Here's a sample code snippet to demonstrate how you can use concurrent.futures [`ThreadPoolExecutor`](https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor) for multithreading:

- [Concurrent Futures Documentation](https://docs.python.org/3/library/concurrent.futures.html)

```python
from concurrent.futures import ThreadPoolExecutor
import math

def main(inputs):
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    concurrent_threaded_sqrt(array)
    return {}

@timer
def concurrent_threaded_sqrt(array):
    """
    concurrent_threaded_sqrt uses concurrent.futures.ThreadPoolExecutor to calculate the square root of an array asynchronously.
    array is a Python list of numbers.
    """
    with ThreadPoolExecutor() as executor:
        results = list(executor.map(math.sqrt, array))
    return results

```

### Manual Multithreading

- [Threading Documentation](https://docs.python.org/3/library/threading.html)

Here's a simple example that uses the threading library to calculate the square root of numbers in an array.

```python
import threading
import math

def main(inputs):
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    threaded_sqrt(array)
    return {}

@timer
# threaded_sqrt took: 0.002 seconds
def threaded_sqrt(array):
    """
    threaded_sqrt uses multithreading to calculate the square root of an array.
    array is a Python list of numbers.
    """
    threads = []
    for i in range(len(array)):
        t = threading.Thread(target=math.sqrt, args=(array[i],))
        threads.append(t)
        t.start()

    for t in threads:
        t.join()
```

## Compiling

Python is an interpreted language meaning that at runtime (i.e. when it’s running) the Python Interpreter converts the Python code to instructions for a computer. Although the interpreter allows for easy creation, quick editing, and fast debugging it does lead to slower execution of code compared to a compiled language, like C/C++.

### Numba

Numba is a Python package that compiles Python code at runtime. This allows for great speedups on calculations that are repeated many times.

- [Numba Documentation](https://numba.readthedocs.io/en/stable/)

Here's an example of how numba decorators can be added to a function to speed up the code:

```python
import numba
import random

def main(inputs):
    n_samples = 100000000
    compiled_monte_carlo_pi_approx(n_samples)
    regular_monte_carlo_pi_approx(n_samples)

    return {}


@timer
# compiled_monte_carlo_pi_approx  took:  1.695  seconds
@numba.njit
def compiled_monte_carlo_pi_approx(nsamples):
    """
    compiled_monte_carlo_pi_approx uses the monte carlo approximation to approximate a
    value of pi with a certain number of samples.
    nsamples is an interger and represents the number of samples used.
    The return value will be a float approximation of pi
    """
    acc = 0
    for i in range(nsamples):
        x = random.random()
        y = random.random()
    if (x ** 2 + y ** 2) < 1.0:
        acc += 1
    return 4.0 * acc / nsamples


@timer
# regular_monte_carlo_pi_approx  took:  55.961  seconds
def regular_monte_carlo_pi_approx(nsamples):
    """
    compiled_monte_carlo_pi_approx uses the monte carlo approximation to approximate a
    value of pi with a certain number of samples.
    nsamples is an interger and represents the number of samples used.
    The return value will be a float approximation of pi
    """
    acc = 0
    for i in range(nsamples):
        x = random.random()
        y = random.random()
    if (x ** 2 + y ** 2) < 1.0:
        acc += 1
    return 4.0 * acc / nsamples
```

### Compiling C/C++

:::danger
This section is **advanced** and requires knowledge in writing and compiling C/C++ code. The **_developer_** needs to write their code in C/C++ or must translate existing Python code to C/C++. It's important that the C/C++ code is compiled for a **Linux** operating system and **x86_64** architecture!
:::

C and C++ are very fast, compiled programming languages. C/C++ code can be run on MecSimCalc by using the CTypes or Pybind11 Python libraries.

#### Ctypes

- [Ctypes Documentation](https://docs.python.org/3/library/ctypes.html)

To use Ctypes, the C/C++ code that has already been compiled into a shared object library (.so) file. A function from this shared library can then be called from Python replacing the Python version of the function.

To use a shared library file, the **_developer_** first must compile their C/C++ using the following command:

```bash
cc -fPIC -shared -o [function].so [CCode].c
```

:::tip
The above command requires installing a C compiler. Alternatively, you can compile online [here](https://mecsimcalc.com/app/5682150/c_types_compiler), without any installations.
:::

Where [function] is the name of the shared library you will call in the Python code, and [CCode] is the name of the C/C++ code file. A C/C++ compiler must be installed.

To compile a shared library file:

1. Save the following code as `my_func.c` in the same directory as your Python code.
2. Compile the code using the terminal command: `cc -fPIC -shared -o function.so my_func.c`.
3. Once compiled, use the `function.so` file in your Python code.

```c
#include <math.h>
#include <stdlib.h>

void multi_sqrt(double* input_array, int len, double* output_array) {
/**
* multi_sqrt square roots the values in an array of doubles.
* input_array is the initial array of values to be square rooted.
* len is the integer value length of the array.
* output_array is the array that stores all the square rooted values.
*/

	for (int i = 0; i < len; i++) {
		output_array[i] = sqrt(input_array[i]);
	}
}
```

This example compares the C code to the previous example of vectorized code using numpy. Vectorization using numpy is very similar as most of numpy actually uses C code in the back end. Using C, although sometimes less convenient, is much more versatile as it can be used for anything that C can be used for.

```python
import ctypes
import os

def main(inputs):
    length = 10000000
    array = (ctypes.c_double * length)() # Using a ctypes array is important for moving data between C and Python
    for i in range(length):
        array[i] = i

    Vec_Sqrt_Array = vectorized_sqrt(array) # From Numpy vectorization example
                                            # vectorized_sqrt  took:  1.215  seconds
    Loop_Sqrt_Array = loop_sqrt(array) # From Numpy vectorization example
                                       # loop_sqrt  took:  20.44  seconds
    C_Sqrt_Array = c_sqrt(array)

    print(Vec_Sqrt_Array == Loop_Sqrt_Array)
    print(Vec_Sqrt_Array == C_Sqrt_Array)
	# Returns all True
    return {}


@timer
# c_sqrt  took:  1.202  seconds
def c_sqrt(array):
    """
    c_sqrt uses a shared library to call a C function that square roots a list.
    array is an array that stores values of c_double.
    The return value will be an array that stores the square rooted values as c_doubles.
    """
    so_file = os.getcwd() + "/function.so"
    function = ctypes.CDLL(so_file)
    sqrt_array = (ctypes.c_double * len(array))()

    function.multi_sqrt(array, ctypes.c_int(len(array)), sqrt_array) # C function call
    return(sqrt_array)
```

#### Pybind11

- [Pybind11 Documentation](https://pybind11.readthedocs.io/en/stable/)

Pybind11 is a Python library that allows for easy binding of C++ code to Python. It is very similar to CTypes but allows for more complex C++ code to be used in Python. Pybind11 is also much more beginner friendly than CTypes.

For an example:

1. Save the following code in a file called _my_func.cpp_, where `PYBIND11_MODULE` macro specifies the name of the Python module:

```c
#include <pybind11/pybind11.h>
#include <math.h>

namespace py = pybind11;

void multi_sqrt(double *input_array, int len, double *output_array) {
    for (int i = 0; i < len; ++i) {
        output_array[i] = sqrt(input_array[i]);
    }
}

PYBIND11_MODULE(function, m) {
    m.def("multi_sqrt", &multi_sqrt);
}
```

2. `pip install pybind11` and then compile the code using this terminal command:

```bash
c++ -O3 -Wall -shared -std=c++11 -fPIC `python3 -m pybind11 --includes` my_func.cpp -o function.so
```

:::tip
The above command requires installing a C compiler. Alternatively, you can compile online [here](https://mecsimcalc.com/app/3537844/pybind_11_compiler), without any installations.
:::

3. Once compiled, import the `function.so` file into your Python code using `import <.so filename>`

```python
import function

def main(inputs):
    length = 10000000
    input_array = [i for i in range(length)]
    output_array = [0] * length

    function.multi_sqrt(input_array, length, output_array)

    print(output_array)  # This will contain the square roots
```
