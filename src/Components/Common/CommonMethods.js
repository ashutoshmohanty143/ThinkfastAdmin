class CommonMethods {
  
    numberValidation(event){
        //console.log(event.charCode);

        return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57

        // if(event.charCode>=48 && event.charCode<=57){
        //     return true;
        // } else{
        //     return false;
        // }
        //it allows only numbers
        //console.log(5)
        //return 1;
    }
}

export default new CommonMethods();