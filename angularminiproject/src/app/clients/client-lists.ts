export class ClientLists {
   
        idtype: string;
        id: string;
        idnum:string;
        name: string;
        upload:string;
        industry: string;
        subindustry: string;
        market: string;
        marketunit: string; 
        description:string;
      
        constructor(id,idnum,idtype,name,upload,industry,subindustry,market,marketunit,description) {
         
          idtype: this.idtype;
          idnum:this.idnum;
          id:this.id;
          name:this.name;
          upload:this.upload;
          industry:this.industry;
          subindustry:this.subindustry
          market:this.market;
          marketunit:this.marketunit;
          description:this.description;
      }
      }

