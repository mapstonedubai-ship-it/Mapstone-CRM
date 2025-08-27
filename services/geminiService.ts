
import { Language, Project } from '../types';

// This is a mock service that simulates calls to the Google Gemini API.
// It uses predefined templates to return realistic-looking responses.
// In a real application, this would use `@google/genai`.

const generateMockResponse = <T,>(data: T, delay: number): Promise<T> => {
    return new Promise(resolve => setTimeout(() => resolve(data), delay));
}

export const geminiService = {
    generateContactMessage: async (name: string, language: Language, agent: string): Promise<string> => {
        console.log(`Simulating Gemini API call for contact message for ${name} in ${language}.`);
        
        let message = '';
        switch (language) {
            case Language.FR:
                message = `Bonjour ${name},\n\nJe suis ${agent} de MAPSTONE Real Estate. Je vous contacte concernant votre intérêt pour l'immobilier à Dubaï. Seriez-vous disponible pour un bref appel cette semaine pour discuter de vos besoins ?\n\nCordialement,\n${agent}`;
                break;
            case Language.AR:
                message = `مرحباً ${name}،\n\nمعك ${agent} من مابستون العقارية. أتواصل معك بخصوص اهتمامك بالعقارات في دبي. هل يناسبك إجراء مكالمة قصيرة هذا الأسبوع لمناقشة متطلباتك؟\n\nمع أطيب التحيات،\n${agent}`;
                break;
            case Language.RU:
                message = `Здравствуйте, ${name}!\n\nМеня зовут ${agent}, я из MAPSTONE Real Estate. Я связываюсь с вами по поводу вашего интереса к недвижимости в Дубае. Удобно ли вам будет созвониться на этой неделе, чтобы обсудить ваши пожелания?\n\nС уважением,\n${agent}`;
                break;
            default: // EN
                message = `Hello ${name},\n\nMy name is ${agent} from MAPSTONE Real Estate. I'm reaching out regarding your interest in properties in Dubai. Would you be available for a brief call this week to discuss your requirements?\n\nBest regards,\n${agent}`;
                break;
        }

        return generateMockResponse(message, 1000 + Math.random() * 1000);
    },

    generateProjectPresentation: async (project: Project, language: Language): Promise<string> => {
        console.log(`Simulating Gemini API call for project presentation for ${project.projectName} in ${language}.`);

        const intro = {
            EN: `**Discover ${project.projectName} by ${project.developer}**\n\nA premier development offering a unique lifestyle in ${project.location}.`,
            FR: `**Découvrez ${project.projectName} par ${project.developer}**\n\nUn développement de premier ordre offrant un style de vie unique à ${project.location}.`,
            AR: `**اكتشف مشروع ${project.projectName} من تطوير ${project.developer}**\n\nمشروع رائد يقدم أسلوب حياة فريد في ${project.location}.`,
            RU: `**Откройте для себя ${project.projectName} от ${project.developer}**\n\nПервоклассный комплекс, предлагающий уникальный образ жизни в ${project.location}.`,
        };

        const details = {
            EN: `\n\n**Project Highlights:**\n- **Unit Types:** ${project.unitTypes.join(', ')}\n- **Handover:** ${new Date(project.handoverDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}\n- **Price Range:** ${project.priceRange}\n- **Payment Plan:** ${project.paymentPlan}`,
            FR: `\n\n**Points forts du projet :**\n- **Types d'unités :** ${project.unitTypes.join(', ')}\n- **Livraison :** ${new Date(project.handoverDate).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}\n- **Fourchette de prix :** ${project.priceRange}\n- **Plan de paiement :** ${project.paymentPlan}`,
            AR: `\n\n**أبرز مزايا المشروع:**\n- **أنواع الوحدات:** ${project.unitTypes.join(', ')}\n- **التسليم:** ${new Date(project.handoverDate).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long' })}\n- **نطاق السعر:** ${project.priceRange}\n- **خطة الدفع:** ${project.paymentPlan}`,
            RU: `\n\n**Основные характеристики проекта:**\n- **Типы юнитов:** ${project.unitTypes.join(', ')}\n- **Сдача:** ${new Date(project.handoverDate).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long' })}\n- **Диапазон цен:** ${project.priceRange}\n- **План оплаты:** ${project.paymentPlan}`,
        };

        const outro = {
            EN: `\n\nThis is a fantastic opportunity for both end-users and investors. Contact us to learn more and schedule a viewing.`,
            FR: `\n\nC'est une opportunité fantastique pour les utilisateurs finaux et les investisseurs. Contactez-nous pour en savoir plus et organiser une visite.`,
            AR: `\n\nهذه فرصة رائعة للمستخدمين النهائيين والمستثمرين على حد سواء. تواصل معنا لمعرفة المزيد وتحديد موعد للمعاينة.`,
            RU: `\n\nЭто фантастическая возможность как для конечных пользователей, так и для инвесторов. Свяжитесь с нами, чтобы узнать больше и договориться о просмотре.`,
        };

        const presentation = `${intro[language]}\n${details[language]}\n${outro[language]}`;
        return generateMockResponse(presentation, 1500 + Math.random() * 1500);
    }
};
