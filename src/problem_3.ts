// Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

function genericFuncForReverseStr<T>(...elements: T[]): T[] {
    return elements.reverse()
}

const reversedStrings: string[] = genericFuncForReverseStr("MR. X", "❤️", "Programming-Hero", "!");
console.log(reversedStrings);
