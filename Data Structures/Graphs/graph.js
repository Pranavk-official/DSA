/**
 * Graph
 * 
 * - Graph is a collection of vertices and edges
 *        - Vertices are nodes
 *        - Edges are connections between nodes
 *  
 * - Represented with 
 *      - adjacency matrix or 
 *      - adjacency list
 *  
 * - Graph Types
 *  - Directed Graph
 *  - Undirected Graph
 *  - Graph with Cycle
 *  - Disconnected Graph
 *  - Weighted Graph
 *  - Unweighted Graph
 *  - Bipartite Graph
 *  - Graph with Negative Cycle
 * 
 */


// TODO: Adjacency Matrix
/**
 * Adjacency Matrix
 * 
 * - A matrix is a two dimensional array
 * - It is used to represent the connections between nodes
 * 
 * For example:
 * 
 * [0, 1, 0]
 * [0, 0, 1]
 * [0, 0, 0]
 * 
 */


// TODO: Adjacency List
/**
 * Adjacency List
 * 
 * - A list is a linear data structure
 * - It is used to represent the connections between nodes
 * - It is stored in a map like structure
 * 
 * For example:
 * 
 * 0 -> [1, 2]
 * 1 -> [0, 2]
 * 2 -> [0, 1]
 * 
 * OR
 * 
 * A -> [B]
 * B -> [A,C]
 * C -> [B]
 */




class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }

        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' --> ' + [ ...this.adjacencyList[vertex]]);
        }
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]){
            return
        }

        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }

        delete this.adjacencyList[vertex]
    }
}


const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

graph.display()


console.log(graph.hasEdge('A', 'C'));

graph.removeVertex('B')

graph.display()
