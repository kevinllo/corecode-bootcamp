# <center>Today's Challenge

- Interpreted And Compiled Programming Languages
- is Java compiled or interpreted, or both?
- Pseudocode Currency Converter exercise

## <strong>Compiled vs Interpreted?</strong>

As developers, we don't care too much about program execution or how it's done behind the scenes. We only care about figuring out the best solution to our program by writing code. Turns out, it may be crucial to us at least to understand the difference between compiled and interpreted language and its advantages and disadvantages. Let's take a look at those!

### <strong>Compiled Languages</strong>

Compiled languages are converted directly into machine code that the processor can execute. As a result, they tend to be faster and more efficient to execute than interpreted languages. They also give the developer more control over hardware aspects, like memory management and CPU usage. <br>

<blockquote> Think of compiled language like a movie that was translated to your native language so that you could understand. The original movie was filmed in English, but then was translated to others. The original movie is our low-level language like C for instance and our Spanish version of the movie is our program compiled to machine code so that the computer (us) can understand.</blockquote>

<br>

### <strong>Interpreted Languages</strong>

Interpreters run through a program line by line and execute each command. Here, if the author decides he wants to use a different kind of olive oil, he could scratch the old one out and add the new one. Your translator friend can then convey that change to you as it happens.

<blockquote> 
What if there is no chance to get the movie in our native language and the only choice is to get the movie with subtitles. That would be the role of an interpreted language, which reads line by line and at the same translate it to machine code and then gets executed without running a compiler.
</blockquote>
 <br>

---

## <b>Is Java compiled or interpreted, or both?</b>

Java is normally first compiled to an intermediary language which is stored in a JAR File. This file is then run by the Java Virtual Machine by executing line by line. As we know, if a programming language gets executed line by line it tends to be an interpreted language, So, Java does both.

---

<br>

## <b>Pseudocode currency converter</b>

### Description
You have been selected to develop the algorithm that will be used to convert dollars (USD) to bitcoin (BTC), for this the first thing you must do is deliver a pseudocode with the algorithm to be developed, in this way you can explain in a better way to the team what will be the required operation. The main idea is to have a website where the user will be asked to enter the amount to convert.

```
1. START
2. us_dollar <-- GET
3. bitcoin <-- us_dollar * 0.000050
4. PRINT bitcoin
5. END
```