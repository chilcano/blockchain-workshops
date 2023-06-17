# Example 02

snarkjs powersoftau new bn128 12 pot12_0000.ptau
snarkjs powersoftau contribute pot12_0000.ptau pot12_0001.ptau


snarkjs powersoftau prepare phase2 pot12_0001.ptau pot12_final.ptau
snarkjs groth16 setup circuit.r1cs pot12_final.ptau circuit_0000.zkey
snarkjs zkey contribute circuit_0000.zkey circuit_0001.zkey


snarkjs zkey export verificationkey circuit_0001.zkey verification_key.json



```sh
$ snarkjs powersoftau new bn128 12 pot12_0000.ptau
[INFO]  snarkJS: First Contribution Hash:
		9e63a5f6 2b96538d aaed2372 481920d1
		a40b9195 9ea38ef9 f5f6a303 3b886516
		0710d067 c09d0961 5f928ea5 17bcdf49
		ad75abd2 c8340b40 0e3b18e9 68b4ffef

$ snarkjs powersoftau contribute pot12_0000.ptau pot12_0001.ptau
Enter a random text. (Entropy): ssdf%&Ydfvdvf`pqlwopśdoopsaopdfa
[INFO]  snarkJS: Contribution Response Hash imported: 
		f04cfc66 e3e22466 d3b6c580 88dfb694
		3ab813af de4f6c8b 45ab9739 3ce30d83
		1ab75865 8b02f5fa 45c6052b 785cc0b5
		289918d3 35e962a0 f4e7b07d 70088e80
[INFO]  snarkJS: Next Challenge Hash: 
		05a4844b f764de45 1a03e834 70252c08
		a20a7cac b3666663 3dc3968a 5cce32e3
		8c37211f 69af79d4 31d37f96 9852718b
		49e358fe 2c81813e 29c777a5 af8e1f95

$ snarkjs powersoftau prepare phase2 pot12_0001.ptau pot12_final.ptau
```


