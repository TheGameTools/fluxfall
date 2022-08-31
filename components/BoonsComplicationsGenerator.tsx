import { ChangeEvent, useCallback, useMemo, useState } from 'react'

import { rollOnTable, TableGenerator, useKey } from '@thegametools/utils'

import { boons, complications, compTypes } from '../data/bc'
import { CompTypes } from '../data/bc/complications'
import TableProperty from './TableProperty'

const BoonsComplicationsGenerator = () => {
  const [isBoons, setIsBoons] = useState(true)
  const [comps, setComps] = useState<Set<CompTypes>>(new Set(compTypes))
  const [compact, setCompact] = useState(false)
  const [bcList, setBCList] = useState<KeyValue[]>([])
  const getKey = useKey(bcList)

  const generate = useCallback(() => {
    if (isBoons) {
      setBCList([{ name: 'Boon', value: rollOnTable(boons) }])
    } else {
      const compTable = rollOnTable(Array.from(comps))

      setBCList([
        { name: 'Complication Type', value: compTable },
        { name: 'Complication', value: rollOnTable(complications[compTable]) },
      ])
    }
  }, [comps, isBoons])

  const compactClasses = compact ? 'flex-wrap' : 'flex-col items-center'

  const list = useMemo(
    () => bcList.map((bc, i) => <TableProperty key={getKey(i)} info={bc} compact={compact} />),
    [bcList, compact, getKey]
  )

  const updateComps = useCallback(
    (evt: ChangeEvent<HTMLInputElement>, compName: string) => {
      const compSet = new Set(comps)

      if (evt.currentTarget.checked) {
        compSet.add(compName)
      } else {
        compSet.delete(compName)
      }

      setComps(compSet)
    },
    [comps]
  )

  return (
    <>
      <label className="flex gap-4 justify-center">
        <label className={`${!isBoons ? 'text-gray-500' : ''}`}>
          Boons
          <input
            type="radio"
            name="boons-complications"
            checked={isBoons}
            onChange={() => {
              setIsBoons(true)
              setBCList([])
            }}
            className="ml-2"
          />
        </label>

        <label>
          <input
            type="radio"
            name="boons-complications"
            checked={!isBoons}
            onChange={() => {
              setIsBoons(false)
              setBCList([])
            }}
            className="mr-1"
          />
          <span className={`${!isBoons ? '' : 'text-gray-500'}`}>Complications</span>
        </label>
      </label>
      <div className="my-4">
        <button
          className="py-4 px-8 font-semibold rounded-lg shadow-lg text-white bg-flux hover:bg-fluxDark"
          onClick={() => generate()}
        >
          Generate {isBoons ? 'Boon' : 'Complication'}
        </button>
      </div>
      <button className="hover:text-tgt py-2 my-1" onClick={() => setCompact(!compact)}>
        [{compact ? 'Pretty' : 'Compact'} View]
      </button>
      {!isBoons ? (
        <>
          <h3 className="mt-2">Select Complication Types</h3>
          <ul className="flex flex-wrap justify-center items-center list-none p-0 m-0 mt-2">
            {compTypes.map(ct => (
              <li key={ct} className="m-2">
                <label
                  className={`hover:cursor-pointer border border-slate-800 rounded-md px-2 py-1 tracking-wide text-sm font-bold ${
                    comps.has(ct) ? 'bg-flux text-white' : 'bg-white'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={comps.has(ct)}
                    onChange={evt => updateComps(evt, ct)}
                    className="opacity-0 w-0 h-0 p-0 m-0"
                  />
                  {ct}
                </label>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <TableGenerator
        sectionClasses={`flex ${compactClasses} justify-center mb-12 w-full`}
        list={list}
      />
    </>
  )
}

export default BoonsComplicationsGenerator
