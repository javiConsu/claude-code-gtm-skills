---
name: detecta-perfil
description: >
  Detecta el perfil profesional del usuario y adapta automáticamente qué señales
  de compra son más relevantes para su negocio. Es el cerebro del sistema de
  personalización. Se ejecuta justo después del arranque o cuando el usuario dice
  "mis señales no son relevantes", "quiero cambiar mi perfil" o "actualiza mis señales".
---

# Detecta tu perfil — Las señales que importan para TI

No todas las señales son iguales para todos.
Un copywriter no necesita saber que una empresa levantó una ronda de €5M.
Necesita saber que esa empresa acaba de lanzar anuncios — porque eso significa que necesita copy.

Esta skill identifica tu perfil y activa las señales que tienen sentido para lo que tú vendes.

---

## Cuándo ejecutar esta skill

- Justo después del `arranque` (siempre)
- Cuando el usuario dice que las señales no le parecen relevantes
- Cuando el usuario cambia de negocio o añade un nuevo servicio
- Cuando el usuario quiere añadir un segundo perfil (ej. founder que también hace consultoría)

---

## Paso 1 — Lee el contexto

Lee `00-icp-definition/ICP.md`. Extrae:
- Qué vende el usuario
- A quién le vende
- Cuánto cobra (para calibrar tamaño de cliente)

Si el perfil ya está detectado y guardado en `00-icp-definition/PERFIL.md`, pregunta:
> "Tu perfil actual es [perfil]. ¿Quieres actualizarlo o añadir uno nuevo?"

---

## Paso 2 — Detecta el perfil automáticamente

Con lo que sabes del ICP, intenta clasificar al usuario en uno de estos perfiles.
**No preguntes si puedes deducirlo.** Solo pregunta si hay ambigüedad real.

### Los 6 perfiles

**FUNDADOR** — Tiene un producto o servicio propio que escala.
Señales: habla de "mi SaaS", "mi plataforma", "mi producto", "clientes recurrentes", "MRR".

**CONSULTOR** — Vende su expertise. Proyectos puntuales o retainers.
Señales: habla de "mis clientes", "proyectos", "consultoría", "estrategia", "retainer".

**COPYWRITER / CONTENT** — Escribe o crea contenido para otras empresas.
Señales: menciona emails, newsletters, anuncios, copy, contenido, redes sociales.

**DESARROLLADOR / AGENCIA TECH** — Construye webs, apps o software para clientes.
Señales: menciona desarrollo, programación, webs, apps, "proyectos tech".

**CONSULTOR DE VENTAS / REVENUE** — Ayuda a otras empresas a vender más.
Señales: menciona ventas, SDRs, CRM, pipeline, revenue, formación de ventas.

**DISEÑADOR / CREATIVO** — Branding, UI/UX, identidad visual, producción creativa.
Señales: menciona diseño, branding, identidad, UX, visual.

Si el usuario encaja en más de uno, elige el principal y guarda el secundario.
Si no encaja en ninguno, usa FUNDADOR como base y adapta.

---

## Paso 3 — Confirma (solo si hay duda)

Si no estás seguro del perfil, haz una sola pregunta:

> "Para darte las señales más útiles: de lo que vendes, ¿qué parte genera más ingresos ahora mismo?"

Acepta la respuesta y clasifica. No hagas más preguntas.

---

## Paso 4 — Asigna las señales adaptadas

Según el perfil detectado, activa el paquete de señales correspondiente:

---

### 🟦 FUNDADOR

**Señales activas:**
1. **Empresa que levantó ronda** → tienen presupuesto y mandato de crecer rápido
   *Skill: `funding-radar`*
2. **Empresa contratando SDR o roles de ventas** → reconocen el problema que tu producto resuelve
   *Skill: `hiring-intent` — keywords: "SDR", "Sales Development", "Business Development", "Account Executive"*
3. **Nuevo CRO, VP Sales o CMO** → quiere metodología y herramientas nuevas en los primeros 90 días
   *Skill: `leadership-change`*
4. **Clientes insatisfechos de competidores** → están buscando alternativa activamente
   *Skill: `competitor-signals`*
5. **Personas preguntando por tu problema en comunidades** → dolor reconocido públicamente
   *Skill: `community-pain`*

**Señal estrella:** `hiring-intent` — una empresa contratando roles de ventas = presupuesto + dolor + urgencia

---

### 🟩 CONSULTOR

**Señales activas:**
1. **Empresa contratando el rol que tú cubres** → necesitan tu expertise pero como externo
   *Skill: `hiring-intent` — adaptar keywords al área de consultoría del usuario*
2. **Empresa con nuevo C-level** → quiere revisar procesos y traer perspectiva externa
   *Skill: `leadership-change`*
3. **Empresa en fase de crecimiento post-ronda** → necesitan ayuda para escalar
   *Skill: `funding-radar`*
4. **Empresa mencionada en prensa por mal rendimiento** → dolor reconocido, buscando ayuda
   *Skill: `competitor-signals` — adaptar a buscar cobertura mediática negativa*
5. **Personas en comunidades pidiendo consejo en tu área** → potenciales clientes en modo exploración
   *Skill: `community-pain`*

**Señal estrella:** `hiring-intent` con keywords del área — buscar el rol que tú reemplazas o complementas

---

### 🟥 COPYWRITER / CONTENT

**Señales activas:**
1. **Empresa lanzando anuncios por primera vez** → van a necesitar copy urgente
   *Skill: `competitor-signals` — buscar "primera campaña", "empezamos a hacer publicidad"*
2. **Empresa publicando ofertas de "Content Manager" o "Copywriter"** → tienen presupuesto de contenido, quizás prefieren externo
   *Skill: `hiring-intent` — keywords: "Content Manager", "Copywriter", "Newsletter", "Email Marketing"*
3. **Empresa con newsletter reciente (< 6 meses)** → están invirtiendo en contenido, pueden necesitar ayuda
   *Skill: `community-pain` — buscar "empezamos newsletter", "necesito copy"*
4. **Empresa con rebranding o nuevo producto** → necesitan nueva voz y mensajes
   *Skill: `leadership-change` — nuevo CMO = nueva dirección de contenido*
5. **Fundadores con audiencia que buscan monetizar** → potenciales clientes directos
   *Skill: `community-pain` — keywords: "monetizar newsletter", "crecer mi lista"*

**Señal estrella:** `hiring-intent` con "Content Manager" + "Copywriter" — empresa que contrata = tiene presupuesto de contenido

---

### 🟨 DESARROLLADOR / AGENCIA TECH

**Señales activas:**
1. **Empresa levantando ronda Seed o Serie A** → van a necesitar construir o escalar tech
   *Skill: `funding-radar`*
2. **Empresa contratando diseñadores UI/UX o producto** → pueden necesitar dev externo también
   *Skill: `hiring-intent` — keywords: "Product Designer", "UX", "Frontend", "Full Stack"*
3. **Empresa buscando CTO o Tech Lead** → están escalando tech, probablemente necesitan ayuda externa
   *Skill: `hiring-intent` — keywords: "CTO", "Tech Lead", "Head of Engineering"*
4. **Empresa con nuevo producto en lanzamiento** → necesitan desarrollo adicional o integración
   *Skill: `community-pain` — buscar "lanzamos", "necesitamos dev", "buscamos agencia"*
5. **Empresa con web desactualizada o sin presencia digital** → oportunidad de propuesta
   *Señal manual — búsqueda de webs en sectores target que necesiten renovación*

**Señal estrella:** `funding-radar` — empresa con ronda reciente = budget para tech confirmado

---

### 🟪 CONSULTOR DE VENTAS / REVENUE

**Señales activas:**
1. **Empresa contratando primer SDR** → van a necesitar proceso antes de que ese SDR empiece
   *Skill: `hiring-intent` — keywords: "SDR", "Sales Development Rep", "Business Development Rep", "primer comercial"*
2. **Empresa con nuevo CRO o VP Sales** → quiere revisar metodología en los primeros 90 días
   *Skill: `leadership-change`*
3. **Empresa con ronda reciente** → van a escalar ventas, necesitan estructura
   *Skill: `funding-radar`*
4. **Personas preguntando sobre ventas B2B, CRM, outreach en comunidades** → en modo búsqueda activa
   *Skill: `community-pain` — keywords: "proceso de ventas", "cómo vender B2B", "CRM recomendación"*
5. **Clientes insatisfechos de competidores de consultoría** → están evaluando cambiar de proveedor
   *Skill: `competitor-signals`*

**Señal estrella:** `hiring-intent` con "SDR" — una empresa contratando su primer SDR necesita proceso ANTES de que ese SDR empiece

---

### 🟧 DISEÑADOR / CREATIVO

**Señales activas:**
1. **Empresa en rebranding o lanzamiento de nuevo producto** → necesitan identidad visual urgente
   *Skill: `community-pain` — keywords: "rebranding", "nueva imagen", "rediseño"*
2. **Empresa contratando "Brand Designer", "Graphic Designer" o "Art Director"** → tienen presupuesto visual, quizás prefieren externo
   *Skill: `hiring-intent` — keywords: "Brand Designer", "Graphic Designer", "Visual Identity", "Art Director"*
3. **Empresa con nuevo CMO** → primer movimiento suele ser revisar la identidad visual
   *Skill: `leadership-change`*
4. **Startup en fase early levantando ronda** → necesitan pitch deck, branding, materiales
   *Skill: `funding-radar`*
5. **Fundadores en comunidades pidiendo feedback de diseño o marca** → cliente potencial en modo exploración
   *Skill: `community-pain` — keywords: "feedback logo", "qué tal mi web", "branding startup"*

**Señal estrella:** `hiring-intent` con "Brand Designer" — empresa que contrata diseñador = tiene presupuesto visual ahora mismo

---

## Paso 5 — Guarda el perfil

Guarda el resultado en `00-icp-definition/PERFIL.md`:

```markdown
# Perfil activo

**Tipo:** [FUNDADOR / CONSULTOR / COPYWRITER / DESARROLLADOR / CONSULTOR VENTAS / DISEÑADOR]
**Perfil secundario:** [si aplica]
**Señal estrella:** [skill + keywords concretos]
**Señales activas:** [lista de skills ordenadas por prioridad]
**Keywords personalizadas:** [las que aplican a su negocio específico]
**Actualizado:** [fecha]
```

---

## Paso 6 — Presenta el resultado al usuario

Sin tecnicismos. Directo. Con ejemplos concretos de SU negocio.

```
Tu perfil: [NOMBRE EN ESPAÑOL]

Las señales que mejor funcionan para lo que tú vendes:

🔥 La más importante: [señal estrella en lenguaje normal]
   Ejemplo real: [ejemplo concreto aplicado a su producto/servicio]
   Cómo usarla: escribe "busca [señal]"

🔥 Segunda: [señal 2]
   Ejemplo real: [ejemplo concreto]
   Cómo usarla: escribe "[trigger phrase en español]"

🔥 Tercera: [señal 3]
   Ejemplo real: [ejemplo concreto]
   Cómo usarla: escribe "[trigger phrase en español]"

---
¿Quieres que busque ahora mismo quién necesita lo que tú vendes?
Escribe "sí" y empezamos.
```

---

## Notas

- Nunca muestres nombres técnicos de skills al usuario (nada de `hiring-intent`, `community-pain`)
- Usa siempre el lenguaje del usuario: "busca empresas contratando X", "encuentra quién se queja de Y"
- Si el usuario tiene un perfil muy específico (ej. "consultor de ecommerce para marcas de moda"), adapta los keywords de cada señal a esa especialidad concreta
- El perfil se puede actualizar en cualquier momento — no es permanente
- Si el usuario menciona que una señal no le fue útil, actualiza `PERFIL.md` con esa exclusión
