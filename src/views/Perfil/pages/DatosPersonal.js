import React from 'react';
// import { Header } from '../../components/Header';
import { Footer } from '../../../components/Footer';
import logo from '../../../assets/images/devSafio-logo.svg';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Dropdown from '../../../components/Dropdown';
import ListBox1 from '../../../components/ListBox1';

const DatosPersonal = () => {
   return (
      <>

{/* <Header /> */}
<header className="flex items-center justify-center md:justify-between bg-hero-gradient h-20">
      <div className="ml-6 logo w-37">
        <img src={logo} alt="" />
      </div>
      <nav className="text-white hidden md:block space-x-8">
      </nav>

<Dropdown/>

</header>

{/* sidebar */}

 <div className="flex">
   <Sidebar/> 

         <div className="container mt-10">
               <div className="container">

         {/* Fecha actualizacion */}
            <div className="flex justify-center md:justify-end md:mr-10">
               <h3 className="mt-2 md:content-end text-[14px]">Ultima actualización 16/09/2022</h3>
            </div>

               {/* Progress bar */}
                  {/* <div className="flex justify-between mt-8">
                     <div className="w-3/5 rounded-full my-auto ml-28">
                        <span className="text-[14px] font-semibold">Progreso del perfil</span>
                        <div className="bg-[#2738f5] text-xs font-medium text-blue-100 text-center rounded-full" > 45%</div>
                     </div>
                  </div> */}

                  <div className="flex justify-center md:justify-between">
                     <h1 className="mt-10 md:ml-24 text-[20px] font-semibold"> Datos Personales</h1>
                  </div>

               {/* Formularios */}
                  <form>
                     <div className="flex ml-6 md:ml-0 flex-col md:flex-row">

                        {/* cuadro 1 */}
                        <div className="md:ml-24 mt-3 md:text-start">
                           <div className="justify-center mb-6 mt-6 font-semibold">Personal
                           </div>
                           <div className="h-fit w-fit flex flex-col ">
                              <div className="flex flex-col md:flex-row md:justify-between">
                                 <div className="">
                                    <label for="nombre" className="block mb-1 text-sm font-medium text-gray-900">Nombre</label>
                                    <input type="text" id="first_name" className="mb-3 w-[24rem] md:w-[14rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese su nombre" required="" />
                                 </div>
                                 <div>
                                    <label for="apellido" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Apellido</label>
                                    <input type="text" id="last_name" className="mb-3 w-[24rem] md:w-[14rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese su apellido" required="" />
                                 </div>
                              </div>
                              <div>
                                 <label for="fecha_nacimiento" className="block mb-1 text-sm font-medium text-gray-900">Fecha de Nacimiento</label>
                                 <input type="text" id="company" className="mb-3 w-[24rem] md:w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dd-mm-aaaa" required="" />
                              </div>
                              <div>
                                 <label for="profile_github" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Perfil de Github</label>
                                 <input type="tel" id="phone" className="mb-3 w-[24rem] md:w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingresa perfil de Github" required="" />
                              </div>

                              <div>
                                 <label for="profile_linkedin" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Perfil Linkedin</label>
                                 <input type="url" id="website" className="mb-3 w-[24rem] md:w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingresa perfil de Linkedin" required="" />
                              </div>
                           </div>
                        </div>

                        {/* cuadro 2 */}

                        <div className="md:ml-24 mt-3 md:text-start">
                           <div className="justify-center mb-6 mt-6 font-semibold">Contacto
                           </div>
                           <div className="h-fit w-fit flex flex-col ">
                              <div>
                                 <label for="nombre" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                 <input type="text" id="first_name" className="mb-3 w-[24rem] md:w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@example.com" required="" />
                              </div>

                              <div>
                                 <label for="apellido" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Número de Teléfono</label>
                                 <input type="text" id="last_name" className="mb-3 w-[24rem] md:w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese número de teléfono" required="" />
                              </div>
                              <div class="relative">

                              {/* <div>
                                 <label for="pais" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">País</label>
                                    <select className="mb-3 w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                       
                                       <option>Chile</option>
                                       <option>Argentina</option>
                                       <option>Perú</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    </div>
                              </div> */}

                              <ListBox1 />

                              <div>
                                 <label for="ciudad" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Ciudad</label>
                                 <input type="tel" id="phone" className="mb-3 w-[24rem] md:w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingresa ciudad" required="" />
                              </div>
                           </div>
                        </div>
                     </div>
                     </div>

                  </form>

                  <div className="flex flex-col justify-center items-center md:justify-end md:items-end md:mr-24 mt-6 mb-20">
                     <button className="bg-blue-500 hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded">Guardar</button>
                  </div>
               </div>
         </div>
   </div>

         <Footer />

      </>

   );

}

export default DatosPersonal;
