# Example 01

## 1. Install Rust

https://rustup.rs/

## 2. Download circom

git clone -b v2.1.5 https://github.com/iden3/circom

## 3. Download the circom lib

git clone https://github.com/iden3/circomlib

## 4. Install NodeJS package
sudo npm -g snarkjs

## 5. 
cd circom
cargo build --release

## 6. Create a circuit in the root

cd ../
vi ciruit.circom

```
pragma circom 2.1.0;
include "circomlib/circuits/comparators.circom";

template Sybil() {
   signal input p;
   signal input q;
   signal input r;
   signal input id;
   component p_neq_1 = IsEqual();
   p_neq_1.in[0] <== p;
   p_neq_1.in[1] <== 1;
   p_neq_1.out === 0;
   component q_neq_1 = IsEqual();
   q_neq_1.in[0] <== q;
   q_neq_1.in[1] <== 1;
   q_neq_1.out === 0;

   component id_neq_0 = IsZero();
   id_neq_0.in <== id;
   id_neq_0.out === 0;
   r === p * q;
}
component main { public  [r,id] } = Sybil();
```


## 7. Run the circuit

circom/target/release/circom --r1cs --wasm --sym

snarkjs r1cs print

```sh
$ snarkjs r1cs print
[INFO]  snarkJS: [ 21888242871839275222246405745257275088548364400416034343698204186575808495616main.p ] * [ main.q ] - [ 21888242871839275222246405745257275088548364400416034343698204186575808495616main.r ] = 0
[INFO]  snarkJS: [ main.id ] * [ main.id_neq_0.inv ] - [ 1 ] = 0
[INFO]  snarkJS: [ 1 +21888242871839275222246405745257275088548364400416034343698204186575808495616main.p ] * [ main.p_neq_1.isz.inv ] - [ 1 ] = 0
[INFO]  snarkJS: [ 1 +21888242871839275222246405745257275088548364400416034343698204186575808495616main.q ] * [ main.q_neq_1.isz.inv ] - [ 1 ] = 0

```

