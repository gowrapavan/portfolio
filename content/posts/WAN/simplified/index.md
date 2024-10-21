---
title: "CSDF"
date: 2024-09-13T10:00:00+06:00
description: "CSDF by Gowra Pavan Kumar."
menu:
  sidebar:
    name: "wan"
    identifier: "wan"
    parent: WAN
    weight: 10
tags: ["Certificates", "Downloads"]
categories: ["Achievements", "Downloads"]
---



# Networking Protocols in Ad Hoc Wireless Networks

---

## 1. **Table-Driven Protocol: Destination Sequence Distance Vector (DSDV)**
The DSDV protocol is a proactive routing protocol where every node maintains a routing table. Each table contains a list of all available destinations, the number of hops to reach the destination, and a sequence number. This helps nodes to update the shortest path routes in the network.

### **Example**:
Consider three nodes: A, B, and C.
- Node A wants to send data to Node C.
- Node A's routing table shows that it can reach Node C via Node B (A → B → C).
- If Node B has a better route to Node C, the routing table will update dynamically.

```plaintext
Routing Table for Node A
Destination | Next Hop | Distance | Sequence Number
C           | B        | 2        | 15
```

### **Diagram**:
```plaintext
A ----> B ----> C
```

---

## 2. **On-Demand Protocol: Dynamic Source Routing (DSR)**
DSR is a reactive routing protocol that finds routes only when needed. It uses a route discovery process to establish paths.

### **Example**:
1. Node A wants to send data to Node D.
2. It broadcasts a "Route Request" packet to all neighbors.
3. When Node D receives the packet, it sends a "Route Reply" packet back to Node A.
4. The route is now known: A → B → C → D.

```plaintext
A ---> B ---> C ---> D
```

---

## 3. **Reactive Protocol: Ad Hoc On-Demand Distance Vector (AODV)**
AODV establishes a route to a destination only when a node requests it. AODV maintains routes as long as they are needed by the source node.

### **Example**:
- Node A wants to send data to Node F.
- It starts by broadcasting a "Route Request" (RREQ) packet.
- Nodes B, C, and D relay the RREQ until it reaches F.
- Once F receives the request, it sends a "Route Reply" (RREP) back to A.

```plaintext
A ---> B ---> C ---> F
```

---

## 4. **Proactive Protocol: Wireless Routing Protocol (WRP)**
WRP is a proactive routing protocol where nodes maintain information about the costs of reaching all possible destinations and updates this information whenever changes occur.

### **Example**:
- Every node maintains a table of its neighbors and their distances.
- If a link fails, WRP recalculates routes and informs other nodes.

```plaintext
Routing Table:
Node | Distance | Next Hop
B    | 1        | B
C    | 2        | B
```

---

## 5. **Hybrid Protocol: Zone Routing Protocol (ZRP)**
ZRP combines the features of proactive and reactive protocols. Within a zone, proactive routing is used. For nodes outside the zone, reactive routing is applied.

### **Example**:
- If Node A wants to send data to Node F, and F is outside A’s zone, A uses reactive routing to find the route beyond its zone.

```plaintext
Zone of A: A → B → C
Outside Zone: A → D → F
```

---

## 6. **Core Extraction Distributed Adhoc Routing (CEDAR)**
CEDAR is a routing protocol designed for QoS in ad hoc networks. It builds a core set of nodes that maintain routes and ensure efficient communication.

### **Example**:
- Nodes A, B, and C form the core network.
- If A needs to communicate with F, it consults the core for the most efficient route.

---

## 7. **Hierarchical State Routing (HSR)**
HSR organizes nodes into a hierarchy. Lower-level nodes report their information to higher-level nodes, which aggregate this information.

### **Example**:
- Nodes A, B, C report to Node D.
- Node D communicates with the rest of the network on behalf of its sub-nodes.

---

## 8. **Issues in Designing Multicast Routing Protocols**
- **Mobility**: Nodes frequently move, requiring constant updates.
- **Scalability**: The protocol should scale efficiently as the number of nodes increases.
- **Reliability**: The protocol must ensure that messages reach all group members.
- **Energy Efficiency**: Nodes should conserve energy, as battery life is limited.

---

## 9. **Operations of Multicast Routing Protocols**
- **Group Management**: Maintaining the list of members in a multicast group.
- **Tree Construction**: Building a structure to relay data efficiently to all members.
- **Route Maintenance**: Keeping the routes up to date as nodes move or fail.

---

## 10. **TCP with Buffering Capability and Sequence Information (TCP-Bus)**
TCP-Bus is an enhancement to TCP in ad hoc networks. It includes buffering of packets and sequence number handling to ensure reliable transmission.

---

## 11. **Split-TCP Approach**
Split-TCP breaks a long TCP session into multiple segments to reduce overhead and improve reliability in ad hoc networks.

---

## 12. **Classification of Transport Layer Solutions**
Transport layer protocols in ad hoc networks can be classified as:
1. **End-to-End Solutions**: Handle communication from source to destination.
2. **Link-Layer Solutions**: Address issues at the link layer.
3. **Hybrid Solutions**: Combine both end-to-end and link-layer approaches.

---

## 13. **Network Security Attacks in Ad Hoc Wireless Networks**
Common security attacks include:
- **Eavesdropping**: Unauthorized interception of data.
- **Wormhole Attack**: Creating a shortcut in the network to intercept or manipulate data.
- **Denial of Service (DoS)**: Disrupting communication between nodes.

---

## 14. **Layer-wise Classification of QoS Solutions**
- **Application Layer**: Ensures QoS through the proper allocation of network resources.
- **Transport Layer**: Manages congestion and ensures end-to-end reliability.
- **Network Layer**: Focuses on routing and resource reservation.
- **MAC Layer**: Ensures fair access to the wireless medium.

---

## 15. **Sensor Network Architecture**
Wireless sensor networks consist of:
1. **Sensing Layer**: Detects environmental changes.
2. **Data Layer**: Transfers data between nodes.
3. **Sink**: Collects data from the network and processes it.

### **Diagram**:
```plaintext
Sensing Node --> Data Node --> Sink
```

---

## 16. **Data Dissemination in Wireless Sensor Networks**
Data dissemination involves distributing data to multiple nodes or a central sink using protocols like flooding or gossiping.

## 17. **Data Gathering in Wireless Sensor Networks**
Data gathering protocols ensure that data collected by sensor nodes is efficiently sent to a central sink for processing.
