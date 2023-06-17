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

