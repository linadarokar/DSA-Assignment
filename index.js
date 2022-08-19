console.clear()

// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number 

function getPairsCount(arr, n, sum)
{
    let count = 0; // Initialize result

    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
 
    return count;
}
 
    let arr = [ 1, 5, 7, -1, 5 ];
    let n = arr.length;
    let sum = 6;
    console.log("Count of pairs is "
        + getPairsCount(arr, n, sum));


/* output : "Count of pairs is 3" */
 
/*---------------------THE END------------------------*/

//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array?

arr = [1, 2, 3, 4];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
}
console.log(arr);

/* output : // [object Array] (4)
               [4,3,2,1] */

/*---------------------THE END------------------------*/

//Q3. Write a program to check if two strings are a rotation of each other?
function areRotations( str1,  str2)
    {
        
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1);
    }
        var str1 = "AACD";
        var str2 = "ACDA";
 
        if (areRotations(str1, str2))
            console.log("Strings are rotations of each other");
        else
            console.log("Strings are not rotations of each other");

//output: "Strings are rotations of each other"  //
/*---------------------THE END------------------------*/


//Q4. Write a program to print the first non-repeated character from a string?
function FirstNonRepeat(s){
 
   for(let i = 0; i < s.length; i++)
   {
 
       if (s.indexOf(s.charAt(i),s.indexOf(s.charAt(i))+1) == -1)
       {
           console.log(s[i]);
 
           break;
       }
   }
   return
}
 
let s = 'javascript'
FirstNonRepeat(s)

//output: "j" //

/*---------------------THE END------------------------*/


//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it?

function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
        if (n == 0)
        {
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        console.log("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod);
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
  
    // Driver code
    var disks = 3; // Number of disks
    towerOfHanoi(disks, 'A', 'C', 'B');


/* output: "Move disk 1 from rod A to rod C"
           "Move disk 2 from rod A to rod B"
           "Move disk 1 from rod C to rod B"
           "Move disk 3 from rod A to rod C"
           "Move disk 1 from rod B to rod A"
           "Move disk 2 from rod B to rod C"
           "Move disk 1 from rod A to rod C" */

/*---------------------THE END------------------------*/


//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression?

function isOperator(x)
    {
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
    
    function preToPost(pre_exp)
    {
  
        let s = [];
 
        let length = pre_exp.length;
  
        for (let i = length - 1; i >= 0; i--)
        {
            if (isOperator(pre_exp[i]))
          {
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
  
               
                let temp = op1 + op2 + pre_exp[i];
  
                s.push(temp);
            }

            else {
  
                s.push(pre_exp[i] + "");
            }
        }
  
        
        return s[s.length - 1];
    }
     
    let pre_exp = "*-A/BC-/AKL";
    console.log("Postfix : " + preToPost(pre_exp));

//output: "Postfix : ABC/-AK/L-*" //

/*---------------------THE END------------------------*/

//Q7. Write a program to convert prefix expression to infix expression?

function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }

    function convert(str)
    {
        let stack = [];

        let l = str.length;
 
        // Reading from right to left
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
              
                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
                stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    }
     
    let exp = "*-A/BC-/AKL";
      
    console.log("Infix : " + convert(exp));


//output: "Infix : ((A-(B/C))*((A/K)-L))"  //

/*---------------------THE END------------------------*/

//Q8. Write a program to check if all the brackets are closed in a given code snippet?

function bracketBalance(expr)
{

    let stack = [];

    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {

            stack.push(x);
            continue;
        }

        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }

    return (stack.length == 0);
}
let expr = "([{}])";
 
// Function call
if (bracketBalance(expr))
    console.log("Balanced ");
else
   console.log("Not Balanced ");

/* output: "Balanced " */

/*---------------------THE END------------------------*/

//Q9. Write a program to reverse a stack?
class Stack {
    constructor() {
        this.top = null
    }
    push(ele) {
        var node = new newNode(ele)
        node.next = this.top
        this.top = node
    }
    pop() {
        var temp = this.top
        var char = temp.data
        this.top = this.top.next
        temp = null
        return char
    }
    reverseString(str) {
        var i = 0
        var reversestr = ""
        while (i != str.length) {
            this.push(str.charAt(i))
            i++
        }
        var temp = this.top
        while (temp != null) {
            var char
            char = this.pop()
            reversestr += char
            temp = this.top
        }
        return reversestr
    }
    display() {
        var temp = this.top
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}
class newNode {
    constructor(data, next) {
        this.data = data
        this.next = null
    }
}

const stack = new Stack()
const string = "javascript"
const reverse = stack.reverseString(string)
console.log(`The String provided - ${string}\nString in reverse format -${reverse}`)


/*output: "The String provided - javascript
           String in reverse format -tpircsavaj" */

/*---------------------THE END------------------------*/

//Q10. Write a program to find the smallest number using a stack?


/*---------------------THE END------------------------*/