
1. **Convert String to Title Case:**
```javascript
function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}

// Example usage:
console.log(toTitleCase("hello world")); // Output: Hello World
```

2. **Convert String to Pascal Case:**
```javascript
function toPascalCase(str) {
    return str.toLowerCase().replace(/(?:^|[-_ ])(\w)/g, (_, c) => c.toUpperCase());
}

// Example usage:
console.log(toPascalCase("hello_world")); // Output: HelloWorld
```

3. **Convert String to camelCase:**
```javascript
function toCamelCase(str) {
    return str.toLowerCase().replace(/[-_ ](\w)/g, (_, c) => c.toUpperCase());
}

// Example usage:
console.log(toCamelCase("hello_world")); // Output: helloWorld
```

4. **Convert String to snake_case:**
```javascript
function toSnakeCase(str) {
    return str.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
}

// Example usage:
console.log(toSnakeCase("HelloWorld")); // Output: hello_world
```

5. **Convert String from Pascal Case to snake_case:**
```javascript
function pascalToSnakeCase(str) {
    return str.replace(/[A-Z]/g, (match, index) => (index !== 0 ? "_" : "") + match.toLowerCase());
}

// Example usage:
console.log(pascalToSnakeCase("HelloWorld")); // Output: hello_world
```

