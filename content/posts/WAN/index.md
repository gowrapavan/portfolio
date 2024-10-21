---
title: "WAN"
date: 2024-09-13T10:00:00+06:00
description: "WAN by Gowra Pavan Kumar."
menu:
  sidebar:
    name: "WAN"
    identifier: "WAN"
    weight: 10
tags: ["Certificates", "Downloads"]
categories: ["Achievements", "Downloads"]
---

# Let's create an updated markdown file with detailed explanations suitable for 5 marks answers.

# Detailed Explanations on Wireless Adhoc Networks

### 1. Describe the issues in adhoc wireless networks.
Adhoc wireless networks face several key challenges:
- **Limited Bandwidth**: Wireless networks typically have less bandwidth compared to wired networks. In adhoc networks, multiple devices share the same communication channel, leading to potential congestion and reduced throughput.
- **High Error Rates**: The wireless medium is susceptible to interference, noise, and signal fading, which increases the likelihood of errors during data transmission. This can lead to data loss and the need for retransmission.
- **Mobility**: Nodes in adhoc networks are often mobile, which complicates the maintenance of a stable network topology. As nodes move, routes can change frequently, resulting in connectivity issues and increased overhead for route management.
- **Scalability**: As the number of nodes in an adhoc network increases, the challenges of maintaining efficient communication and managing routing protocols also grow. Network performance can degrade with too many nodes.
- **Power Consumption**: Many nodes in adhoc networks are battery-operated. Managing energy efficiently becomes crucial to prolong network life, especially since nodes may need to sleep or reduce transmission power to save battery.

### 2. Describe adhoc wireless networks and cellular networks with a neat diagram.
| **Feature**             | **Adhoc Networks**                          | **Cellular Networks**                      |
|-------------------------|---------------------------------------------|--------------------------------------------|
| **Infrastructure**       | Decentralized, no fixed infrastructure      | Centralized, with fixed base stations      |
| **Node Role**            | Nodes act as both hosts and routers         | Devices connect via base stations          |
| **Communication Type**   | Peer-to-peer                                | Centralized                                |
| **Scalability**          | Limited due to node management              | Highly scalable with added infrastructure  |
| **Mobility**             | Dynamic routing based on node movement      | Managed handoffs between base stations     |
| **Power Consumption**    | Energy-efficient mechanisms are crucial     | Managed by base stations                   |
| **Setup Cost**           | Low (no additional infrastructure required) | High due to infrastructure needs           |

### 3. Describe the designing goals of MAC protocol for adhoc Wireless networks.
The primary goals for designing MAC (Medium Access Control) protocols in adhoc wireless networks include:
- **Fair Channel Access**: Ensure that all nodes have equal opportunity to access the channel to transmit data.
- **Efficient Use of Bandwidth**: Optimize the utilization of the available bandwidth to maximize data throughput while minimizing delays.
- **Power Efficiency**: Minimize energy consumption, especially for battery-operated nodes, to prolong the network's operational lifetime.
- **Scalability**: Design protocols that can handle increasing numbers of nodes without significant performance degradation.
- **Low Collision Rate**: Reduce the likelihood of data collisions, which can lead to retransmissions and increased latency.
- **Mobility Support**: Ensure that the MAC protocol can efficiently manage changing network topologies due to node movement.

### 4. List out the different MAC protocols for wireless adhoc networks.
Some of the MAC protocols used in wireless adhoc networks include:
- **MACAW (MACA for Wireless)**: A protocol that uses Request to Send (RTS) and Clear to Send (CTS) messages to manage channel access and reduce collisions.
- **BTMA (Busy Tone Multiple Access)**: A sender-initiated protocol that uses a busy tone to inform other nodes of ongoing transmissions.
- **D-PRMA (Dynamic Packet Reservation Multiple Access)**: A hybrid protocol that allows dynamic reservation of time slots for data transmission.
- **IEEE 802.11**: A widely used standard for wireless local area networks (WLANs) that employs both contention and coordination mechanisms.
- **S-MAC (Sensor MAC)**: Designed for wireless sensor networks, focusing on energy efficiency and low latency.
- **RI-BTMA (Receiver-Initiated BTMA)**: A protocol where the receiver signals its readiness to receive data, reducing collisions.

### 5. Explain the Classification of MAC protocols.
MAC protocols can be classified based on their access mechanisms:
- **Contention-based Protocols**: These protocols allow multiple nodes to compete for access to the channel. Examples include MACAW and BTMA. They rely on random backoff times to minimize collisions.
  
- **Contention-based with Reservation**: These protocols combine contention with a reservation mechanism, allowing nodes to reserve time slots for transmission. D-PRMA is an example where nodes can dynamically reserve slots after successful contention.
  
- **Hybrid Protocols**: These combine elements of both contention and reservation mechanisms, allowing for flexibility and efficiency in varying network conditions.

### 6. Describe in-detail about MACAW sender-initiated protocols of contention-based protocols.
- **MACAW Protocol**: A revision of the MACA protocol, MACAW introduces an RTS/CTS mechanism to manage data transmission effectively. 
    - When a sender wants to transmit data, it first sends an RTS packet to the intended receiver. 
    - If the receiver is ready, it responds with a CTS packet. 
    - The sender then transmits the data packet.
    - MACAW also implements a backoff algorithm (MILD) to ensure fairness among competing nodes, reducing their backoff window after successful transmissions.

### 7. Describe in-detail about D-PRMA synchronous protocols of contention-based protocols with reservation mechanism.
- **D-PRMA (Dynamic Packet Reservation Multiple Access)**: This protocol divides time into slots, allowing nodes to compete for access to the channel. 
    - After a successful transmission, nodes can dynamically reserve time slots for future data transmissions. 
    - This reservation mechanism helps improve efficiency by reducing contention and ensuring that nodes have guaranteed access to the channel when needed.
      ![Adhoc vs Cellular Network](https://media.geeksforgeeks.org/wp-content/uploads/20200725143841/mac.png)


### 8. Describe in-detail about RI-BTMA receiver-initiated protocols of contention-based protocols.
- **RI-BTMA (Receiver-Initiated BTMA)**: In this protocol, the receiver sends a Ready-to-Receive (RTR) signal when it is prepared to accept data. 
    - Senders only transmit data upon receiving this RTR signal, preventing collisions. 
    - The protocol uses a busy tone to inform other nodes to defer their transmissions, enhancing overall efficiency and reducing the hidden terminal problem.

### 9. Describe in-detail about BTMA sender-initiated protocols of contention-based protocols.
- **BTMA Protocol**: This protocol allows senders to initiate communication by checking if the channel is clear. 
    - If clear, the sender transmits data, and a busy tone is activated to inform other nodes to refrain from transmitting. 
    - This mechanism minimizes the chances of collisions, as it creates a controlled environment for data transfer.


# Distributed Packet Reservation Multiple Access Protocol (D-PRMA)

The **Distributed Packet Reservation Multiple Access (D-PRMA)** is an enhanced version of the existing PRMA (Packet Reservation Multiple Access) protocol, specifically designed for use in **ad-hoc networks**. D-PRMA is based on **Time Division Multiple Access (TDMA)** techniques, where time is divided into slots, and these slots are used by nodes to reserve communication channels for data transmission.

## Key Concepts:

1. **Time Division**: 
   - The communication channel is divided into **frames**, and each frame is further divided into a certain number of **slots** (denoted as "s" slots). 
   - Each slot can be subdivided into **minislots** for finer control over communication.

2. **Slot Reservation Process**:
   - Nodes in the network compete to reserve the **first minislot** of a given slot. If a node successfully reserves the first minislot, the remaining minislots in that slot are also assigned to that node.
   - Once a slot is reserved, it is **exclusively assigned** to the winning node, ensuring efficient use of the channel.

## Example:
Consider two terminals, **A** and **B**, where terminal A is further divided into nodes **D** and **E**. Both A and B share the same communication channel, and the goal is for A to transmit data to terminal B.

- Nodes **A**, **D**, and **E** compete for the first minislot of **Slot 2**. If **A** wins the first minislot, then the remaining minislots in Slot 2 are automatically reserved for A. 
- The nodes D and E, having lost the competition, cannot use Slot 2.

## RTS/CTS Mechanism:
- **RTS (Request to Send)** and **CTS (Clear to Send)** signals are used to manage the slot reservation and prevent common issues like the **hidden terminal** and **exposed terminal problems**.
   - **RTS/BI** (Request to Send with Busy Indicator) helps manage **exposed terminal problems**, where a terminal might incorrectly sense the channel as busy due to nearby transmissions.
   - **CTS/BI** (Clear to Send with Busy Indicator) prevents the **hidden terminal problem**, ensuring that nodes do not interfere with ongoing transmissions.

In the above example, terminal A sends a **CTS** signal to nodes D and E, indicating that it has successfully reserved the slot and is actively transmitting. This prevents D and E from attempting to transmit data in the same slot. 

However, if a new node, **F**, wants to send data to another terminal, say **C**, it can still transmit if it receives an RTS response from C, even if A is transmitting, thus avoiding interference between the two transmissions.

## Key Requirements of D-PRMA:

1. **Slot Reservation**: Once the **first minislot** of a slot is reserved by a terminal, the entire slot (including all minislots) is reserved for that terminal.
2. **Efficient Resource Usage**: When a terminal successfully reserves a slot, other terminals avoid wasting resources on trying to use the same slot.

## Application:
D-PRMA is commonly used for **voice traffic** in ad-hoc networks. It ensures that nodes efficiently reserve time slots and avoid unnecessary resource usage, enabling seamless communication.

## Conclusion:
D-PRMA is a robust protocol that enhances the functionality of the original PRMA by distributing the reservation process across the network. This allows for more dynamic and efficient management of network resources, especially in ad-hoc environments where mobility and limited bandwidth can pose significant challenges. 

This protocol is widely utilized for **real-time communication**, such as voice and video traffic, where guaranteed access to communication slots is critical.
