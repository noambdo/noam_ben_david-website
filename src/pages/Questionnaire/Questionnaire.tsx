import Hero from '../../components/Hero/Hero';
import PersonalQuestionnaireForm from '../../components/PersonalQuestionnaireForm/PersonalQuestionnaireForm';
import { images } from '../../data/images';

export default function Questionnaire() {
  return (
    <main className="page questionnaire">
      <Hero
        image={images.questionnaire}
        thin
        title="שאלון התאמה אישית"
        subtitle="כמה שאלות קצרות שיעזרו לי להבין את העור שלך ולהמליץ על הטיפול הנכון."
      />

      <section className="section">
        <div className="container">
          <PersonalQuestionnaireForm />
        </div>
      </section>
    </main>
  );
}
