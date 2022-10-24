import { LightningElement, track } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import testComponent from '@salesforce/resourceUrl/TestComponent';

export default class TestComponent extends LightningElement {
    connectedCallback() {
        loadScript(this, testComponent)
            .then(() => {
                console.log('Start');
                let a = 0;
                let b = increment(a);
                console.log('Done')
                console.log('b is ' + b);
            })
            .catch((error) => {
                console.log('Error');
            });
    }
}