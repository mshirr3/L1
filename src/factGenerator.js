/**
 * Class containing the function generating facts
 */

import fetch from 'node-fetch'

export class FactsGenerator {

    /**
     * Function returning random fact 
     *
     * @returns {String} a random fact
     */
    async getRandomFact () {
        // api key required for Requesting resource from public api
        const apiKey = '4T/cKhkFLZWeNzKyyW8lQw==Es4om62WdutX8DG4'
        let randomFact // initiatie variable
        const response = await fetch('https://api.api-ninjas.com/v1/facts', {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        })

        // error handling
        if (!response.ok) {
            const error = new Error(respone.text)
            error.status = response.status_code
        } else {
            const res = await response.json()
            randomFact = res[0].fact
        }

        return randomFact
        }  
}