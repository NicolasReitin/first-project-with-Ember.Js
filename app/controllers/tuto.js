import Controller from '@ember/controller';
import { action, set } from '@ember/object';

export default class TutoController extends Controller {

    prix = 123;

    //n'est executé qu'un seule fois
    constructor() {

        super(...arguments); 
        console.log('coucou');
    }

    @action 
    prixplusdix(){

        var c = this;

        console.log('prixplusdix');
        // c.prix = c.prix + 10
        set (c, 'prix', c.prix+10)
        console.log(c.prix);
    
    }


}
