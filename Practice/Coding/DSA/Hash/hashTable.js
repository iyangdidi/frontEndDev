/**
 *
 */

class HashTable {
    constructor(size = 42) {
      this.buckets = Array.from({ length: size }, () => []);
      this.size = size;
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
  
      return hash % this.size;
    }
  
    set(key, value) {
      const hashIdx = this.hash(key);
      this.buckets[hashIdx].push([key, value]);
    }
  
    get(key) {
      const hashIdx = this.hash(key);
      const bucket = this.buckets[hashIdx];
      for (const [k, v] of bucket) {
        if (k === key) {
          return v;
        }
      }
    }
  
    remove(key) {
      const hashIdx = this.hash(key);
      const bucket = this.buckets[hashIdx];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
  
      return false;
    }
  }
  
  // Example usage:
  const hashTable = new HashTable();
  
  hashTable.set("name", "John");
  hashTable.set("age", 30);
  hashTable.set("occupation", "Developer");
  
  console.log(hashTable.get("name")); // Output: John
  console.log(hashTable.get("age")); // Output: 30
  
  hashTable.remove("occupation");
  console.log(hashTable.get("occupation")); // Output: undefined
  