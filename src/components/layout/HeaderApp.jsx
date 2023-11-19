
export const HeaderApp = ({image, text}) => {

  return (
    <div id="HeaderApp" className="flex flex-col items-center w-full bg-slate-900">
      <div id="header_content" className="flex gap-2 w-full px-6 py-3 max-w-md p text-sm items-center">

        <div className="w-6">
          <img src={image} alt="" />
        </div>
        {text}

      </div>
    </div>
  )
}