var queue = (function(array) {
    array = [];
    var reversearray;
    //--Define the max size of the stack
    var MAX_SIZE = 5;

    function isEmpty() {
        if (array.length < 1) 
            console.log("Queue is empty");
    };
    isEmpty();

    return {
        insert: function(ele) {
            if (array.length < MAX_SIZE) {
                array.push(ele)
                reversearray = array.reverse();
                return reversearray;
            } else {
                console.log("Queue Overflow")
            }
        },
        delete: function() {
            if (array.length > 1) {
                //reversearray = array.reverse();
                array.pop();
                return array;
            } else {
                console.log("Queue Underflow");
            }
        }
    }
    })()
    console.log(queue.insert(5))
console.log(queue.insert(3))
console.log(queue.delete())

