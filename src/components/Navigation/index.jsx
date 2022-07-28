import styles from '../../styles/Home.module.css'

const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
const leftArrow  = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"
  
const Navigation = ({step, fieldGroups, isValid, setStep}) =>(
    <section className={styles.navigationControls}>
        {
        step === fieldGroups.length-1 && 
        <button 
            type="submit" 
            className={styles.submitButton} 
            disabled={!isValid}
        >
            SAVE
        </button>
        }
        {
        step < fieldGroups.length-1 &&
        <button 
            type="button" 
            className={styles.nextButton} 
            disabled={!isValid} 
            onClick={()=>{setStep(step+1)}}
        >
            <img src={rightArrow}/>
            NEXT
        </button>
        }
        {
        step > 0 &&
        <button 
            type="button" 
            className={styles.backButton} 
            onClick={()=>{setStep(step-1)}}
        >
            <img src={leftArrow}/>
            BACK
        </button>
        }
    </section>
  )

  export default Navigation
