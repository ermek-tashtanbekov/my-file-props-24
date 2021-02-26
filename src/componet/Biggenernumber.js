function BuggenerNumber({a, b}){
    let num = 0;
   if(a > b){
       num = a
   }
   else if(b > a){
       num = b
   }
   return<div>
       thist number{num}
   </div>
}
export default BuggenerNumber;