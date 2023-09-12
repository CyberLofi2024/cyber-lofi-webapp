import { useEffect, useState } from "react";

export default function useOnScreen(ref: any, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin },
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref.current, rootMargin]);

  return isVisible;
}

/**
 * useOnScreen is a custom React hook that allows a component to detect when a specific DOM element is 
 * visible within the viewport and keep track of the visibility status. It uses the built-in useEffect hook 
 * from the React library and the IntersectionObserver API.

The hook takes two arguments:

ref is a reference to the DOM element to detect visibility, which is typically created using the React "useRef" hook.
rootMargin is an optional string that defines an offset around the root element. It can be used to enlarge or 
shrink the root element's bounding box before checking for an intersection. The default value is "0px".
The useEffect hook is used to set up the IntersectionObserver when the component mounts and to remove 
the observer when the component unmounts. It also updates the observer when the ref or rootMargin changes.
It returns a boolean value isVisible that indicates whether the DOM element is currently visible or not.

Here is an example of how to use this hook:
import { useRef } from "react"
import useOnScreen from "./useOnScreen"

export default function OnScreenComponentComponent() {
  const headerTwoRef = useRef()
  const visible = useOnScreen(headerTwoRef, "-100px")

  return (
    <div>
      <h1>Header</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt,
        nam id itaque error dicta? Numquam earum iusto optio officia, molestias
        debitis illum facilis nemo asperiores eaque voluptates modi? Dicta
        mollitia fugit doloremque vitae, dolores sequi fuga quas vel incidunt
        animi architecto dignissimos amet in quam praesentium corrupti voluptate
        dolorem impedit numquam aut cupiditate nulla! Nisi dolore dicta, cumque
        illum tempora enim dolores eum quis itaque nostrum architecto vel cum
        officiis aperiam qui exercitationem voluptatibus. Veritatis unde
        doloribus dolorem architecto, eum reprehenderit possimus similique eius
        cum obcaecati totam placeat. Delectus nulla, quae temporibus omnis
        assumenda autem ad quibusdam facilis aspernatur inventore nobis. Vitae
        architecto, unde consequuntur velit consequatur dicta mollitia, fuga
        iure hic accusamus blanditiis. Dignissimos, tenetur amet adipisci
        nostrum perferendis ad rerum accusamus distinctio repellendus eius,
        quisquam repellat nesciunt, consequatur culpa neque? Inventore vitae
        laborum aperiam ullam dolorem officiis ipsum aliquid doloribus pariatur,
        commodi iure illum soluta delectus, architecto ratione maiores
        accusamus. Provident quia sequi dolorum asperiores necessitatibus
        consequatur perspiciatis at a, inventore, deserunt corporis recusandae
        earum vero voluptas saepe pariatur, libero illo. Numquam facilis magnam
        exercitationem ipsam libero quidem minima dolores perferendis eveniet
        impedit eos, nesciunt unde velit facere itaque eum quasi laboriosam
        veritatis aliquid tenetur. Blanditiis exercitationem laborum, optio
        nulla minima libero sed doloremque soluta, dignissimos tempora rerum id
        nostrum iusto eveniet illo corrupti dicta. Non fuga exercitationem sit
        dignissimos voluptatibus cumque nobis iste asperiores illum fugit
      </div>
      <h1 ref={headerTwoRef}>Header 2 {visible && "(Visible)"}</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt,
        nam id itaque error dicta? Numquam earum iusto optio officia, molestias
        debitis illum facilis nemo asperiores eaque voluptates modi? Dicta
        mollitia fugit doloremque vitae, dolores sequi fuga quas vel incidunt
        animi architecto dignissimos amet in quam praesentium corrupti voluptate
        dolorem impedit numquam aut cupiditate nulla! Nisi dolore dicta, cumque
        illum tempora enim dolores eum quis itaque nostrum architecto vel cum
        officiis aperiam qui exercitationem voluptatibus. Veritatis unde
        doloribus dolorem architecto, eum reprehenderit possimus similique eius
        cum obcaecati totam placeat. Delectus nulla, quae temporibus omnis
        assumenda autem ad quibusdam facilis aspernatur inventore nobis. Vitae
        architecto, unde consequuntur velit consequatur dicta mollitia, fuga
        iure hic accusamus blanditiis. Dignissimos, tenetur amet adipisci
        nostrum perferendis ad rerum accusamus distinctio repellendus eius,
        quisquam repellat nesciunt, consequatur culpa neque? Inventore vitae
        laborum aperiam ullam dolorem officiis ipsum aliquid doloribus pariatur,
        commodi iure illum soluta delectus, architecto ratione maiores
        accusamus. Provident quia sequi dolorum asperiores necessitatibus
        consequatur perspiciatis at a, inventore, deserunt corporis recusandae
        earum vero voluptas saepe pariatur, libero illo. Numquam facilis magnam
        exercitationem ipsam libero quidem minima dolores perferendis eveniet
        impedit eos, nesciunt unde velit facere itaque eum quasi laboriosam
        veritatis aliquid tenetur. Blanditiis exercitationem laborum, optio
        nulla minima libero sed doloremque soluta, dignissimos tempora rerum id
        nostrum iusto eveniet illo corrupti dicta. Non fuga exercitationem sit
        dignissimos voluptatibus cumque nobis iste asperiores illum fugit
        veritatis fugiat quia voluptates cupiditate vel rerum eligendi facere
        sint nostrum quam, maiores dolorem repellat voluptas! Magnam ullam quis
        quas aut consequuntur quo doloremque, earum sint soluta vero iste quasi
        voluptates labore rerum aspernatur illum esse maxime laudantium? Tempore
        perspiciatis perferendis ea dolorem et quasi eos illo beatae consectetur
        maxime, enim ducimus corrupti, accusantium quisquam rem dolorum itaque
        iste velit. Amet similique accusamus doloribus expedita modi a
        architecto accusantium labore unde non, dolore totam quaerat sit
        laboriosam quae ullam impedit, pariatur repudiandae quisquam debitis
        repellendus nihil. Cumque blanditiis ut recusandae illum! Maiores
        eveniet nulla exercitationem natus delectus est minus a architecto
        pariatur molestias quo nihil maxime quasi facere magnam neque dolorem
        ad, doloribus hic! Qui corporis perspiciatis dolores rem minima tenetur.
        Fugit ipsa consectetur ad reiciendis, quia iste, sapiente rerum
        exercitationem reprehenderit laborum eligendi cumque? Quia porro modi
        repudiandae nostrum accusamus! Corporis eum fugit nihil facilis placeat
        ab est obcaecati consequuntur qui atque tempore soluta aliquid saepe
        ducimus, at sed modi illo ipsa numquam ratione vero eos reprehenderit!
        Sapiente nesciunt consequatur labore iste quas possimus rem cumque,
        fugit laborum repellendus nisi adipisci officia temporibus quaerat!
        Beatae doloribus veritatis at, maiores suscipit debitis reiciendis cum
        impedit non aut modi iste? Placeat illo quisquam assumenda esse cum
        ipsum quasi perspiciatis voluptatem rerum itaque, similique quidem
        molestias exercitationem ullam eum amet tempore dolor aliquid unde
        deserunt dolore excepturi. Aut dolore rerum sequi nihil soluta eum
        expedita consequatur aliquid consequuntur saepe esse necessitatibus
        repudiandae, natus, officia enim odit rem nobis adipisci, voluptates
        autem dolor blanditiis ipsam animi a. Illo accusantium iure qui aperiam
        commodi, quidem, dolorem error eum animi, id nam? Corporis, non
        adipisci!
      </div>
    </div>
  )
}
This hook can be helpful when you want to track when a specific DOM element comes into view or goes out of sight, 
for example, to lazy-load images, track scroll position,
 or display elements on demand.
 * 
 */
