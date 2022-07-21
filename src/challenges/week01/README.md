## Date of birth in the matrix

There is two possible ways of implementing conversion from decimal to binary. The most easy one is by using division.

The proccess consists of taking the number that is required and divided by 2. Each time the number will be the result of the previous division and if the module of that result is zero or one, then we have our binary number.

**Example**:

- Date of birth: (29/03/2002) <br><br>

### Let's take **29** as our first number to convert it.

| Division | Quotient | Remainder |
| :------: | :------: | :-------: |
|  29 / 2  |    14    |     1     |
|   14/2   |    7     |     0     |
|   7/2    |    3     |     1     |
|   3/2    |    1     |     1     |
|   1/2    |    0     |     1     |

### **We must read it from bottom to top. Our first binary number is 11101** <br>

---

### Let's take the second number: **03**

| Division | Quotient | Remainder |
| :------: | :------: | :-------: |
|  3 / 2   |    1     |     1     |
|   1/2    |    0     |     1     |

### **Our second binary number is 11** <br>

---

### Let's take our final number: **2002**

| Division | Quotient | Remainder |
| :------: | :------: | :-------: |
| 2002 / 2 |   1001   |     0     |
|  1001/2  |   500    |     1     |
|  500/2   |   250    |     0     |
|  250/2   |   125    |     0     |
|  125/2   |    62    |     1     |
|   62/2   |    31    |     0     |
|   31/2   |    15    |     1     |
|   15/2   |    7     |     1     |
|   7/2    |    3     |     1     |
|   3/2    |    1     |     1     |
|   1/2    |    0     |     1     |

### **Our final binary number is 11111010010** <br>

---

## **My date of birth in binary**:

_Input_ : 29/03/2002 <br>
_Output_ : 11101/11/11111010010
