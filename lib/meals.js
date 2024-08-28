import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals(){
    await new Promise((resolve)=>{setTimeout(resolve, 2000)});
    // throw new Error("Loading ails")
    return  db.prepare('SELECT * from meals').all();
}


export  function getMeal(slug){
    return db.prepare('select * from meals WHERE slug = ?').get(slug);
}