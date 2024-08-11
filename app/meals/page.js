import Link from 'next/link';
import classes from './page.module.css';
import MealGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export default async function MealsPage(){
   const meals =  await getMeals()

     return <>
     <header className={classes.header}>
     <h1>
        Delicious meal, craetes{' '}
        <span className={classes.highlight}>by You</span>
     </h1>
     <p className={classes.cta}>
        <Link href="/meals/share">Share your Fev Recipie</Link>
     </p>
     </header>
  
     <main className={classes.main}>
        <MealGrid meals={meals}></MealGrid>
     </main>

     </>
    }