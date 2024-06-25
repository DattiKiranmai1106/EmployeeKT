sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.employeeonboard.employeekt.controller.EmpView", {
            onInit: function () {
                var jsonStateData={"state":[{
                    "ckey":"IN",
                    "skey":" ",
                    "sdes":"Select State"
                },{
                    "ckey":"IN",
                    "skey":"AP",
                    "sdes":"Andhra Pradesh"
                },{
                    "ckey":"IN",
                    "skey":"TN",
                    "sdes":"Tamil Nadu"
                },{
                    "ckey":"IN",
                    "skey":"KA",
                    "sdes":"Karnataka"
                },{
                    "ckey":"IN",
                    "skey":"GA",
                    "sdes":"Goa"
                },{
                    "ckey":"IN",
                    "skey":"KL",
                    "sdes":"Kerala"
                },{
                    "ckey":"IN",
                    "skey":"HP",
                    "sdes":"Himachal Pradesh"
                },{
                    "ckey":"IN",
                    "skey":"MP",
                    "sdes":"Madhya Pradesh"
                },{
                    "ckey":"IN",
                    "skey":"AR",
                    "sdes":"Arunachal Pradesh"
                },{
                    "ckey":"IN",
                    "skey":"TG",
                    "sdes":"Telangana"
                }]}
                
                var oModelState=new sap.ui.model.json.JSONModel();
                oModelState.setData(jsonStateData);
                this.getView().setModel(oModelState,"oStateModel");
                
            var jsonCounData={"country":[{
                "key":"IN",
                "des":"India"
            },{
                "key":"GER",
                "des":"Germany"
            },{
                "key":"JA",
                "des":"Japan"
            },{
                "key":"KE",
                "des":"Kenya"
            },{
                "key":"NO",
                "des":"Norway"
            },{
                "key":"PO",
                "des":"Poland"
            },{
                "key":"KR",
                "des":"South Korea"
            },{
                "key":"ES",
                "des":"Spain"
            },{
                "key":"CH",
                "des":"SwizerLand"
            }]}

            var oModel=new sap.ui.model.json.JSONModel();
            oModel.setData(jsonCounData);//data set to the model
            this.getView().setModel(oModel, "oCountryModel");
            
            //Student js object0
            var jsonData = [];

            var oModel=new sap.ui.model.json.JSONModel(jsonData);
            var oColItem = this.getView().byId("colId");
            //this.getView().byId("idProductsTable").setModel(oModel)
            this.getView().setModel(oModel,"studentmodel");
           // this.getView().byId("idStudentTable").bindAggregation("items","/",oColItem);

           var jsonData2 = [{
            "SNo" : "",
            "TypeOfDegree" : "",
            "Branch" : "",
            "PassOutYear" : "",
            "Percentage" : "",
            "valueStateSno": "None",
            "ValueStateTextSno": "",
            "valueStateDegree": "None",
            "ValueStateTextDegree": "",
            "valueStateBranch": "None",
            "ValueStateTextBranch": "",
            "valueStateYear": "None",
            "ValueStateTextYear": "",
            "valueStatePer": "None",
            "ValueStateTextPer": "",
            }];
            
            var oModel2 = new sap.ui.model.json.JSONModel();
            oModel2.setData(jsonData2);
            this.getView().setModel(oModel2, "oValidationModel");
            
        },
        onPress:function(){
            // var oView = this.getView();
             var oView = this.getView();
             if (!this.oDialog) {
                 this.oDialog = sap.ui.core.Fragment.load({
                     name: "com.sap.kt.employeeonboard.employeekt.fragment.education",
                     controller: this
                 }).then(function (oDialog) {
                     this.oDialog = oDialog;
                     oView.addDependent(this.oDialog);
                     this.oDialog.open();
                 }.bind(this));
             } else {
                 this.oDialog.open();
             }

         },
         onPressSave:function(){
            //  var sNoId= sap.ui.getCore().byId("idSNo").getValue();
            //  var sTypeId = sap.ui.getCore().byId("idDegree").getValue();
            //  var sBranchId = sap.ui.getCore().byId("idBranch").getValue();
            //  var sYearId = sap.ui.getCore().byId("idYear").getValue();
            //  var sPerId= sap.ui.getCore().byId("idPer").getValue();
            
             var oModel = this.getView().getModel("studentmodel").getData();
             var oValidModel = this.getView().getModel("oValidationModel");
             var sSno = oValidModel.getProperty("/SNo");
             var sType = oValidModel.getProperty("/TypeOfDegree");
             var sBranch = oValidModel.getProperty("/Branch");
             var sPass = oValidModel.getProperty("/PassOutYear");
             var sPer = oValidModel.getProperty("/Percentage");
             if(!sSno || !sType || !sBranch || !sPass || !sPer) {

             }

             if(sSno || sType || sBranch || sPass || sPer) {
                if(!sSno) {
                oValidModel.setProperty("/valueStateSno","Error");
                oValidModel.setProperty("/ValueStateTextSno","Enter the Value");
                }
                if(!sType) {
                oValidModel.setProperty("/valueStateDegree","Error");
                oValidModel.setProperty("/ValueStateTextDegree","Enter the Value");
                }
                if(!sBranch) {
                oValidModel.setProperty("/valueStateBranch","Error");
                oValidModel.setProperty("/ValueStateTextBranch","Enter the Value");
                }
                if(!sPass) {
                    oValidModel.setProperty("/valueStateYear","Error");
                    oValidModel.setProperty("/ValueStateTextYear","Enter the Value");
                }
                else{
                  if(sPass.length==4){
                    //oValidModel.setProperty("/PassOutYear",sPass);
                    oValidModel.setProperty("/valueStateYear","None");
                  }
                  else{
                    oValidModel.setProperty("/valueStateYear","Error");
                    oValidModel.setProperty("/ValueStateTextYear","Enter the correct year formate");
                  }
                }
                if(!sPer) {
                    oValidModel.setProperty("/valueStatePer","Error");
                    oValidModel.setProperty("/ValueStateTextPer","Enter the Value");
                 }
                else{
                    7
                    if(percentageRegex.test(sPer)){
                      //oValidModel.setProperty("/Percentage_CGPA",sPer);
                      oValidModel.setProperty("/valueStatePer","None");
                    }
                    else{
                      oValidModel.setProperty("/valueStatePer","Error");
                      oValidModel.setProperty("/ValueStateTextPer","Percentage should be 6char and % and . sign");
                    }
                }
                
             }
             else{
             var oPayload = {
                 "SNo":sSno,
                 "TypeOfDegree":sType,
                 "Branch":sBranch,
                 "PassOutYear":sPass,
                 "Percentage":sPer
             }
             oModel.push(oPayload);
             this.oDialog.close();
             this.byId("idStudentTable").getModel("studentmodel").refresh();
             MessageBox.success("Expense Saved Successfully") 
            }},
            onPressDelete:function(oEvent){
                var sSelectedPath = oEvent.getParameter("listItem").getBindingContextPath().split("/")[1];
                this.getView().getModel("studentmodel").getData().splice(sSelectedPath,"1");
                this.byId("idStudentTable").getModel("studentmodel").refresh();

            },
            onPressClose:function(){
                this.oDialog.close();
            },
            onDateChange:function(){
                var a=this.byId("dateValue").getValue();
                var year2 = a.split("-")[0]
              //  console.log(year2);
                var dt=new Date();
                var year1 = dt.getFullYear();
               // console.log(year1);
                var cal = year1 - year2
                if(cal<21)
                {
                    this.byId("ageInput").setValueStateText("Input data is not valid"); 
                    this.byId("ageInput").setValueState("Error");
                }
               
                else
                {
                    this.byId("ageInput").setValue(cal);  
                    this.byId("ageInput").setValueState("None");
                }
                
             //   console.log(cal);
             },
             onAccept:function(){
                var a=this.byId("idInputFirst").getValue();
                var b=this.byId("idInputLast").getValue();
                var c=this.byId("idEmailInput").getValue();
                var d=this.byId("idPhoneNo").getValue();
               var e=this.byId("idCountry").getValue();
                var f=this.byId("dateValue").getValue();
                var g=this.byId("idText").getValue();
               // var h=this.byId("idState").getValue();
                var i=this.byId("idCity").getValue();
                var j=this.byId("idPincode").getValue();
                var k=this.byId("idLogin").getValue();
                var l=this.byId("idPassword").getValue();

                var flag1=true;
        
                   if(!a) {
                        this.byId("idInputFirst").setValueState("Error");
                        this.byId("idInputFirst").setValueStateText("Enter the Value");
                        flag1=false;
                    }
                    else{
                        this.byId("idInputFirst").setValueState("None"); 
                        
                    }
                    if(!b) {
                        this.byId("idInputLast").setValueState("Error");
                        this.byId("idInputLast").setValueStateText("Enter the Value");
                        flag1=false;
                    }
                    else{
                        this.byId("idInputLast").setValueState("None"); 
                        
                    }
                    if(!c) {
                        this.byId("idEmailInput").setValueState("Error");
                        this.byId("idEmailInput").setValueStateText("Enter the Value");
                        flag1=false;
                    }
                    else{
                        this.byId("idEmailInput").setValueState("None"); 
                        
                    }
                    if(!d) {
                        this.byId("idPhoneNo").setValueState("Error");
                        this.byId("idPhoneNo").setValueStateText("Enter the Value");
                        flag1=false;
                    }
                    else{
                        //console.log(typeof(d));
                        let phoneNumberRegex = /^\+\d{12}$/;
                        if(phoneNumberRegex.test(d)){
                            this.byId("idPhoneNo").setValueState("None");
                            
                        }
                        else{
                            this.byId("idPhoneNo").setValueState("Error");
                            this.byId("idPhoneNo").setValueStateText("Phone no having 13 char and + sign only");
                            flag1=false;
                        }
                    }
                    if(!e) {
                        this.byId("idCountry").setValueState("Error");
                        this.byId("idCountry").setValueStateText("Enter the Value");
                        flag1=false;
                    }
                    else{
                        this.byId("idCountry").setValueState("None"); 
                      
                    }
                    if(!f) {
                        this.byId("dateValue").setValueState("Error");
                        this.byId("dateValue").setValueStateText("Enter the Value");
                        flag1=false;
                    }
                    else{
                        this.byId("dateValue").setValueState("None");
                       
                    }
                    if(!g) {
                        this.byId("idText").setValueState("Error");
                        this.byId("idText").setValueStateText("Enter the Value");
                        flag1=false;
                    }
                    else{
                        this.byId("idText").setValueState("None"); 
                        
                    }
                    // if(!h) {
                    //     this.byId("idState").setValueState("Error");
                    //     this.byId("idState").setValueStateText("Enter the Value");
                    // }
                    if(!i) {
                        this.byId("idCity").setValueState("Error");
                        this.byId("idCity").setValueStateText("Enter the Value");
                        flag1=false;
                    }
                    else{
                        this.byId("idCity").setValueState("None"); 
                       
                    }
                    if(!j) {
                        this.byId("idPincode").setValueState("Error");
                        this.byId("idPincode").setValueStateText("Enter the Value");
                        flag1=false;
                    }
                    else{
                        if(j.length==6){
                          //  this.byId("idPincode").setValue(j);  
                            this.byId("idPincode").setValueState("None"); 
                           
                        }
                        else{
                            this.byId("idPincode").setValueState("Error");
                            this.byId("idPincode").setValueStateText("Pincode should be 6 characters");
                            flag1=false;
                        }
                        
                    } 
                    if(!k) {
                        this.byId("idLogin").setValueState("Error");
                        this.byId("idLogin").setValueStateText("Enter the Value");
                        flag1=false;
                    }
                    else{
                        if(k.length == 15 && k.includes(" ")){
                        this.byId("idLogin").setValueState("None"); 
                        }
                        else{
                        this.byId("idLogin").setValueState("Error");
                        this.byId("idLogin").setValueStateText("Name should be 15 char");
                        flag1=false;
                        }
                    }
                    if(!l) {
                        this.byId("idPassword").setValueState("Error");
                        this.byId("idPassword").setValueStateText("Enter the Value");
                        flag1=false;
                    }
                    else{
                        if(l.length>=10){
                            let val1=false;
                            let val2=false;
                            let val3=false;
                            let val4=false;
                            for(let i=0;i<l.length;i++){
                              if((l[i]>='a' && l[i]<='z')||(l[i]>='A' && l[i]<='Z')){
                                val1=true;
                              }
                              if(l[i]>='0' && l[i]<='9'){
                                val2=true;
                              }
                              if(l[i]=='$'){
                                val3=true;
                              }
                              if(l[i]=='*'){
                                val4=true;
                              }
                            }
                            if(val1 && val2&& val3 && val4){
                                this.byId("idPassword").setValueState("None");
                            }
                             else{
                                this.byId("idPassword").setValueState("Error");
                                this.byId("idPassword").setValueStateText("password should contains number,$,*,Alphabites and length should be more than 10 or equal");
                                flag1=false;
                            }   
                         }
                         else{
                            this.byId("idPassword").setValueState("Error");
                            this.byId("idPassword").setValueStateText("password length should be more than 10 or equal");
                            flag1=false;
                         }
                    }
                 if(flag1==false){
                     sap.m.MessageBox.error("Mandatory validation failed");
                  }
                
             },
             onLiveChangeValue:function(oEvent) {
                if(oEvent.getSource().getValue()) {
                oEvent.getSource().setValueState("None");
                } else {
                oEvent.getSource().setValueState("Error");
                oEvent.getSource().setValueStateText("Enter the value");
                }
            },
            onChangeValue:function(oEvent) {
                if(oEvent.getSource().getValue()) {
                oEvent.getSource().setValueState("None");
                } else {
                oEvent.getSource().setValueState("Error");
                oEvent.getSource().setValueStateText("Enter the value");
                }
            }
        });
    });
