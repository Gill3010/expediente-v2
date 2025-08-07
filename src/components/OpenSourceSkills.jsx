import { useEffect } from 'react';
import { FaWordpress } from 'react-icons/fa';
import { SiMoodle } from 'react-icons/si';
import ojsLogo from "../assets/logos/ojs.webp";
import ompLogo from "../assets/logos/omp.webp";
import opsLogo from "../assets/logos/ops.webp";
import dspaceLogo from "../assets/logos/dspace.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const OpenSourceSection = () => {
const platforms = [
 {
type: 'image',
src: ojsLogo,
name: 'OJS (Open Journal Systems)',
solution: 'dark-bg' // Solución: fondo oscuro para logos blancos
 },
 {
type: 'image',
src: ompLogo,
name: 'OMP (Open Monograph Press)',
solution: 'dark-bg'
 },
 {
type: 'image',
src: opsLogo,
name: 'OPS (Open Preprint Systems)',
solution: 'dark-bg'
 },
 {
type: 'image',
src: dspaceLogo,
name: 'DSpace',
solution: 'dark-bg'
 },
 {
type: 'icon',
icon: FaWordpress,
name: 'WordPress',
iconColor: '#21759B'
 },
 {
type: 'icon',
icon: SiMoodle,
name: 'Moodle',
iconColor: '#F98012'
 }
 ];
useEffect(() => {
AOS.init({
duration: 500,
once: true,
easing: 'ease-in-out'
 });
 }, []);
return (
<section className="py-16 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-gray-800 mb-4">
 Experiencia en <span className="text-blue-600">Plataformas Académicas</span>
</h2>
<div className="w-24 h-1 bg-blue-600 mx-auto"></div>
<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
 Especializado en sistemas de código abierto para la gestión del conocimiento académico
</p>
</div>
<div className="space-y-8">
{/* Primera fila: OJS, OMP, OPS */}
<div className="flex flex-wrap justify-center gap-6">
{platforms.slice(0, 3).map((platform, index) => (
<div
key={platform.name}
data-aos="fade-up"
data-aos-delay={index * 50}
className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-100 flex flex-col items-center flex-shrink-0 w-full sm:w-auto min-w-[160px] max-w-[200px]"
>
<div className={`mb-4 w-20 h-20 flex items-center justify-center p-2 rounded-lg ${
platform.solution === 'dark-bg'
 ? 'bg-gray-800' // Fondo oscuro para logos blancos
 : 'bg-white' // Fondo blanco para iconos de colores
}`}>
{platform.type === 'image' ? (
<img
src={platform.src}
alt={platform.name}
className="w-full h-full object-contain p-1"
/>
 ) : (
<platform.icon
className="w-12 h-12"
style={{ color: platform.iconColor }}
/>
 )}
</div>
<h3 className="text-gray-700 font-medium text-center text-sm sm:text-base">
{platform.name}
</h3>
</div>
 ))}
</div>

{/* Segunda fila: DSpace, WordPress, Moodle */}
<div className="flex flex-wrap justify-center gap-6">
{platforms.slice(3).map((platform, index) => (
<div
key={platform.name}
data-aos="fade-up"
data-aos-delay={(index + 3) * 50}
className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-100 flex flex-col items-center flex-shrink-0 w-full sm:w-auto min-w-[160px] max-w-[200px]"
>
<div className={`mb-4 w-20 h-20 flex items-center justify-center p-2 rounded-lg ${
platform.solution === 'dark-bg'
 ? 'bg-gray-800' // Fondo oscuro para logos blancos
 : 'bg-white' // Fondo blanco para iconos de colores
}`}>
{platform.type === 'image' ? (
<img
src={platform.src}
alt={platform.name}
className="w-full h-full object-contain p-1"
/>
 ) : (
<platform.icon
className="w-12 h-12"
style={{ color: platform.iconColor }}
/>
 )}
</div>
<h3 className="text-gray-700 font-medium text-center text-sm sm:text-base">
{platform.name}
</h3>
</div>
 ))}
</div>
</div>
</div>
</section>
 );
};
export default OpenSourceSection;