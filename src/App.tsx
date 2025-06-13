
const dimensions = {
    rows: 5,
    cols: 10
}

function App() {
    const {rows, cols} = dimensions
  return (
    <div className={'h-dvh  w-full justify-center items-center'}>
        {
        Array.from({length: rows}).map((_, rowIndex) => (
            <div className={`flex -translate-y-[${rowIndex * 20}px]`} key={rowIndex}>
                {
                    Array.from({length: cols}).map((_, colIndex) => (
                        <div className={'flex'}>
                            <div className={'w-1'}/>
                            <div className={'bg-red-400 hexagon'} key={colIndex}></div>
                        </div>

                    ))
                }
            </div>
        ))
        }
    </div>
  )
}

export default App
