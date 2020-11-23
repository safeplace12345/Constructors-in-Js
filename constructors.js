console.log('hello World')
// Factory Function
//  1) 
    // a) With No arguments
// function factory(){
//   return{
//       workers : '2',
//       bosses : function (){
//           console.log('No bosses needed')
//       }
//   }
// }

// const my_factory = factory()
// console.log(my_factory.bosses())

// Constructor Function
// 2) 
    // a) Function without arguments

// function Construct(){
//     this.workers = '2',
//     this.bosses = function (){
//         console.log('Bosses needed Urgently!')
//     }
// }

// const my_factory = new Construct();
// console.log(my_factory)
// console.log(my_factory.bosses());

// 1)  Factory
    // b) Function With Arguments
 function factory(worker){
     return{
        //  worker is the argument here
         workers : worker,
        //  choice is the argument here
         bosses : function(choice){
            return choice
         }
     }
 }

 const my_factory = factory('2');
console.log(my_factory);
//  my_factory.bosses('Yes may be needed')
// console.log( my_factory.bosses('Yes may be needed'))



// 2) Constructor
    // b) With args

//     function Construct(worker){
//         this.workers = worker,
//         this.bosses = function (choice){
//              return choice;
//           }
//     }

// const my_factory = new Construct(4);
// console.log(my_factory)
// console.log(my_factory.bosses('No sir no way!'))


// Adding methods and properties to constructor functions

// // 1) Factory 
//     // c) 
//     // i) Warning adding a Factory prop dose not get inherited by instance objects of Factory.
//     factory.company = 'C.R.S';
//     console.log(factory.company) // --> returns C.R.S
// //    console.log(my_factory) --> returns undefined


// //2)Constructor function
//   //  c)  Adding props and methods
//         // i) Warning changing the Construct props dose not over rides all instance objects of new Construct.
//     Construct.company = 'T.D.H';
//     // console.log(Construct.company)
//     // console.log(my_factory.company) --> returns undefined
//     my_factory.company = 'I.O.M';
//     console.log(my_factory.company)  //--> returns "I.O.M"
//         //  ii) Consider manual or minimal changes to individual Objects :)

// Deleting Props and methods 

// 1)
//   a) 
delete my_factory.bosses;
console.log(my_factory) // --> returns {workers:'2'} only