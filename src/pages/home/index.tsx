import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import { Select, Switch } from 'antd'
import useTheme from 'store/theme'
import { classNames } from 'utils'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { supportedLanguagesMap } from 'i18n'

const randoms = [
  [1, 2],
  [3, 4, 5],
  [6, 7],
]

function Home() {
  const { t } = useTranslation()
  const lightTheme = useTheme(state => state.light)
  const toggleTheme = useTheme(state => state.toggleTheme)

  return (
    <>
      <div className={classNames('relative overflow-hidden', lightTheme ? 'bg-white text-black' : 'bg-black text-white')}>
        <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <div className="flex items-center justify-between">
                <div className="mr-10">
                  <Avatar size="large" src={logo} />
                </div>
                <h1 className="font-bold tracking-tigh text-5xl mr-10">
                  {t('Welcome')}
                </h1>
                <Switch
                  className=" bg-gray-200"
                  checkedChildren="🌙"
                  unCheckedChildren="🌞"
                  onChange={toggleTheme}
                />
                <Select
                  defaultValue={i18next.resolvedLanguage}
                  onChange={(value) => {
                    i18next.changeLanguage(value)
                  }}
                  options={Array.from(supportedLanguagesMap, ([key, value]) => ({ value: key, label: value }))}
                />
              </div>

              <p className="mb-5 mt-4 text-xl text-gray-500">
                {t('Description')}
              </p>

            </div>
            <div>
              <div className="my-10">
                <a
                  href="vscode://"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                >
                  {t('Begin')}
                </a>
                <div
                  aria-hidden="true"
                  className="pointer-events-none mt-10 md:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      {randoms.map((random, number) => (
                        <div
                          key={`random-${random[number]}`}
                          className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                        >
                          {random.map(number => (
                            <div
                              key={`random-${number}`}
                              className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                            >
                              <img
                                src={`https://picsum.photos/600?random=${number}`}
                                alt=""
                                className="h-full w-full bg-indigo-100 object-cover object-center"
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
