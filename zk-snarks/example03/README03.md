# Example 03

cd circuit_js

input.json with {"p": "2", "q": "3", "r": "6", "id": "8" } 

node generate_witness.js circuit.wasm ../input.json witness.wtns

snarkjs wej  witness.wtns witness.json




snarkjs groth16 prove circuit_0001.zkey circuit_js/witness.wtns proof.json public.json




snarkjs groth16 verify verification_key.json public.json proof.json

snarkjs zkesv circuit_0001.zkey

