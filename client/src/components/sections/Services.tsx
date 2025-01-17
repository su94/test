
import { Card, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const services = {
  en: [
    {
      title: "Press Releases and Media Kits",
      description: "Crafting compelling press releases that effectively communicate your key messages and newsworthy events. We also design comprehensive media kits that provide journalists with all the necessary information and materials.",
    },
    {
      title: "Media Outreach and Relationship Building",
      description: "Establishing and maintaining strong relationships with key media outlets and journalists. We proactively pitch stories and secure media placements in top-tier publications and broadcasts.",
    },
    {
      title: "Monitoring and Reporting",
      description: "Continuously monitoring media coverage and public sentiment related to your organization. We provide detailed reports and analysis to track the effectiveness of media strategies and identify opportunities for improvement.",
    },
    {
      title: "Media Production",
      description: "End-to-end film production, including pre-production, filming, and post-production. We produce captivating television and radio content, as well as develop content for online platforms and digital campaigns.",
    },
    {
      title: "Event Management and Press Conferences",
      description: "Planning and executing press conferences, product launches, and media events. We handle all logistics and media coordination to ensure successful coverage.",
    },
    {
      title: "Media Training and Preparation",
      description: "Professional training sessions for spokespersons, preparing them for media interviews and public appearances with comprehensive briefings and practice.",
    },
    {
      title: "Consultation Services",
      description: "Expert consultation on media strategy, brand positioning, and communication planning to help achieve your organizational objectives.",
    },
    {
      title: "Strategic Planning",
      description: "Developing and implementing strategic media plans that align with your business objectives. We provide expert advice on media engagement strategies to optimize coverage and visibility.",
    },
    {
      title: "Content Creation",
      description: "Crafting compelling narratives for web, print, and digital platforms. We produce high-quality videos, design visually striking graphics, and create engaging animations tailored for diverse audiences.",
    },
    {
      title: "Crisis Management",
      description: "Developing and implementing crisis communication strategies to manage and mitigate negative publicity. We provide real-time support and messaging during crises to protect your brand's reputation.",
    },
    {
      title: "Marketing Services",
      description: "Implementing effective digital strategies, including SEO, PPC, and social media management. We create impactful print, outdoor, and broadcast advertisements to enhance your brand's visibility.",
    }
  ],
  ar: [
    {
      title: "البيانات الصحفية والحقائب الإعلامية",
      description: "صياغة بيانات صحفية مؤثرة تنقل رسائلك الرئيسية والأحداث الإخبارية بفعالية. نقوم أيضاً بتصميم حقائب إعلامية شاملة تزود الصحفيين بجميع المعلومات والمواد اللازمة.",
    },
    {
      title: "التواصل الإعلامي وبناء العلاقات",
      description: "إنشاء وتعزيز علاقات قوية مع وسائل الإعلام الرئيسية والصحفيين. نقوم بطرح القصص بشكل استباقي وضمان التغطية الإعلامية في المنشورات والبث الإذاعي الرائد.",
    },
    {
      title: "المراقبة وإعداد التقارير",
      description: "مراقبة مستمرة للتغطية الإعلامية والرأي العام المتعلق بمؤسستك. نقدم تقارير وتحليلات مفصلة لتتبع فعالية الاستراتيجيات الإعلامية وتحديد فرص التحسين.",
    },
    {
      title: "الإنتاج الإعلامي",
      description: "إنتاج أفلام شامل، يشمل مرحلة ما قبل الإنتاج والتصوير وما بعد الإنتاج. ننتج محتوى تلفزيوني وإذاعي جذاب، ونطور محتوى للمنصات الإلكترونية والحملات الرقمية.",
    },
    {
      title: "إدارة الفعاليات والمؤتمرات الصحفية",
      description: "تخطيط وتنفيذ المؤتمرات الصحفية وإطلاق المنتجات والفعاليات الإعلامية. نتولى جميع الجوانب اللوجستية والتنسيق الإعلامي لضمان تغطية ناجحة.",
    },
    {
      title: "التدريب الإعلامي والتحضير",
      description: "جلسات تدريبية احترافية للمتحدثين الرسميين، تجهيزهم للمقابلات الإعلامية والظهور العام مع إحاطات شاملة وتدريب عملي.",
    },
    {
      title: "الخدمات الاستشارية",
      description: "استشارات خبيرة في الاستراتيجية الإعلامية، وتموضع العلامة التجارية، وتخطيط الاتصال للمساعدة في تحقيق أهداف مؤسستك.",
    },
    {
      title: "التخطيط الاستراتيجي",
      description: "تطوير وتنفيذ خطط إعلامية استراتيجية تتماشى مع أهداف عملك. نقدم المشورة الخبيرة حول استراتيجيات التواصل الإعلامي لتحسين التغطية والظهور.",
    },
    {
      title: "إنتاج المحتوى",
      description: "صياغة روايات مؤثرة للويب والمطبوعات والمنصات الرقمية. ننتج مقاطع فيديو عالية الجودة، ونصمم رسومات بصرية مميزة، وننشئ رسومات متحركة مخصصة لمختلف الجماهير.",
    },
    {
      title: "ادارة الأزمات",
      description: "تطوير وتنفيذ استراتيجيات اتصال لإدارةالأزمات وتخفيف الدعاية السلبية. نقدم دعمًا فوريًا ورسائل أثناء الأزمات لحماية سمعة علامتك التجارية.",
    },
    {
      title: "خدمات التسويق",
      description: "تنفيذ استراتيجيات رقمية فعالة، بما في ذلك تحسين محركات البحث والإعلانات المدفوعة وإدارة وسائل التواصل الاجتماعي. نقوم بإنشاء إعلانات مؤثرة مطبوعة وخارجية وإذاعية لتعزيز ظهور علامتك التجارية.",
    }
  ],
};

const Services = () => {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("services.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services[language].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="group hover:scale-105 transition-all duration-300 h-full cursor-pointer relative overflow-hidden min-h-[200px]">
                <CardHeader className="flex items-center justify-center h-full">
                  <h3
                    className={`text-xl font-bold text-gray-900 leading-tight mb-2 text-center`}
                  >
                    {service.title}
                  </h3>
                  <div
                    className={`absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6`}
                  >
                    <div className="max-h-full overflow-y-auto">
                      <p className="text-sm text-white leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
