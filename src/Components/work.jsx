import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

function work() {
  return (
    
  <section className="py-12 bg-gray-50">
  <div className="overflow-x-auto">
  <table className="work">
        <tbody>
          <tr>
            <td className="w-1/2 text-left align-top">
    <div className="mb-10 text-left">
      <h2 className="text-3xl font-bold text-gray-900 fontFamily:inter">Work with tools you already use</h2>
      <p className="mt-4 text-lg leading-6" style={{ color: '#6B7280' }}>
      Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate
       critical development work, eliminate toil, and deploy changes with ease
      </p>

    </div>    
              <ul className="space-y-6">
                <li className="flex items-start"><FaCheckCircle className="mr-3 text-purple-600" style={{ width: '20px', height: '20px' }} />
                <span >
                    <i className="fas fa-check"></i>
                  </span>
                  <span>Continuous integration and deployment</span>
                </li>
                <li className="flex items-start"><FaCheckCircle className="mr-3 text-purple-600" style={{ width: '20px', height: '20px' }} />
                  <span >
                    <i className="fas fa-check"></i>
                  </span>
                  <span>Development workflow</span>
                </li>
                <li className="flex items-start"><FaCheckCircle className="mr-3 text-purple-600" style={{ width: '20px', height: '20px' }} />
                  <span >
                    <i className="fas fa-check"></i>
                  </span>
                  <span>Knowledge management</span>

                  
                </li>
              </ul>






                <p className="mt-4 text-lg leading-6" style={{ color: '#6B7280' }}>
                  Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
                </p>
              
            </td>

            
            <td className="w-1/2">
              <img src="src/assets/dds.png" className="w-608 h-455" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  
</section>
  )
}

export default work