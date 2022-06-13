import React from 'react';
import useTools from '../../hooks/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools] = useTools()
    const pipes = [...tools].reverse().slice(0, 3)
    return (
        <div className="bg-slate-100">
            <div className='  pt-10 pb-8 container mx-auto '>
                <div className='text-center space-y-4'>
                    <h2 className='text-4xl font-bold italic'>Our Tools / Parts </h2>
                    <div>
                        <p className='text-lg px-2 lg:px-24 lg:text-xl '>The quality of our products, engineered by us has been hailed and vouched by numerous companies and MNC’s across the world. Since dealing with the most successful clients, we have realized the global requirement & its need for superior quality. </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 my-12 px-4'>
                    {
                        pipes.map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        ></Tool>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Tools;