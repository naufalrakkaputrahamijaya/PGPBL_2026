import { Service } from '@angular/core';
import { ref, push, onValue, remove, get, update } from 'firebase/database'; import { database } from './firebase.service';

@Service()
export class DataService {
    // Save a new point 
    savePoint(point: { name: string, coordinates: string }) { 
        const pointsRef = ref(database, 'points'); 
        return push(pointsRef, point); }

    // Update an existing point
    updatePoint(pointKey: string, point: { name: string, coordinates: string }) {
        return update(ref(database, `points/${pointKey}`), point);
    }

    deletePoint(key: string) {
        const pointRef = ref(database, `points/${key}`);
        return remove(pointRef);
    }

    getPoint(key: string) {
        const pointRef = ref(database, `points/${key}`);

        return new Promise((resolve, reject) => {
            get(pointRef).then((snapshot) => {
                const data = snapshot.val();
                resolve(data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    getPoints() {
        const pointsRef = ref(database, 'points');

        return new Promise((resolve, reject) => {
            onValue(pointsRef, (snapshot) => {
                const data = snapshot.val();
                resolve(data);
            }, (error) => {
                reject(error);
            });
        });
    }
}
