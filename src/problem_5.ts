//Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

function probFive(text: unknown): void {
    if (typeof text === 'string') {
        console.log('The String is:', text);
    } else {
        console.error('Error: The type is not a string');
    }
}

probFive('Assignment submitted')
probFive(11)