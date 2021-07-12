// from pandas import Timestamp
// import time;
// import hashlib;


// // #timestamp
// ts = time.time();
// ts_str = str(float(ts));


// #keys
// public_key = 'a3c785ecc50aa21b134fca1391903926';
// private_key = 'my_private_key';

// #hash and encodings
// m_hash = hashlib.md5();
// ts_str_byte = bytes(ts_str, 'utf-8');
// private_key_byte = bytes(private_key, 'utf-8');
// public_key_byte = bytes(public_key, 'utf-8');
// m_hash.update(ts_str_byte + private_key_byte + public_key_byte);
// m_hash_str = str(m_hash.digest());


// #all request parameters
// payload = {'ts': ts_str, 'apikey': 'a3c785ecc50aa21b134fca1391903926', 'hash': m_hash_str};


// #make request
// r = requests.get('https://gateway.marvel.com:443/v1/public/characters', params=payload);


// #for debugging
// print(r.url);
// print(r.json());

    const token = `3963876900386021`


// I need a Hero API and Key to add here
export const server_calls = {
    get: async () => {
        const response = await fetch(`http://gateway.marvel.com/v1/public`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
            
        });
        console.log(server_calls)
        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`http://gateway.marvel.com/v1/public`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to Create data from server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`http://gateway.marvel.com/v1/public/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to UPDATE data from server')
        }

        return await response.json()
    },

    delete: async (id: string, data: any = {}) => {
        const response = await fetch(`http://gateway.marvel.com/v1/public/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }

        });


    }
}