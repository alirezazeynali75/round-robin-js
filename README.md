# round-robin-js
Round robin implementation with typescript

In javascript
```javascript
    const {Selector} = require('@alirezazeynali/round-robin')

    const roundRobin = new Selector([1, 2, 3, 4])

    const el = roundRobin.next() // => 1

    // if achive the last index begin from first 
```

In typescript, you can import like this:

```typescript
    import {Selector} from '@alirezazeynali/round-robin'
```
