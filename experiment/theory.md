## **Theory**

**Servomotors**

Servomotors (control motors) are motors designed and built for use in feedback control systems. They have a high speed of response and are made for both DC and AC operation. These motors are typically fractional horsepower motors with low efficiency.

<div align="center">
<img alt="" src="./images/ckt.png" style="width:40%;height:30%"><br/>
<span><b>Fig. 1. Schematic representation of a Servomotor</b> </span>
</div>
<br/><br/>

The **two-phase induction motor** is often used as a servomotor because:

1.  No brushes or slip rings are used, which means less maintenance and a rugged, robust construction.
2.  The motor requires only a simple control amplifier.

A schematic of the two-phase induction motor is shown in Fig. 2. The motor has a stator with two distributed windings displaced by 90 electrical degrees. One winding, the **fixed or reference phase**, is supplied with a constant voltage ($E\_{ref}$). The other winding, the **control phase**, is supplied with a variable amplitude voltage ($E\_c$) that is 90 degrees out of phase with the reference voltage. The direction of rotation reverses when the control phase voltage changes its sign. The rotor is typically of the squirrel cage or drag-cup type.

<div align="center">								
<img class="center img-fluid" alt="" src="./images/2ph_IM.png" ><br/>
<b>Fig. 2. Schematic of a Two-Phase Induction Motor</b>
</div><br/>

Unlike a DC motor, the torque-speed curve of a two-phase induction motor is quite nonlinear. From Fig. 3, with the reference phase voltage held constant, the motor torque $T\_m$ is a function of both speed and control phase voltage, represented by:

$$T_m = f(\dot{\theta}, E) \tag{1}$$

where $\\dot{\\theta}$ = speed and $E$ = control phase voltage.

<div align="center">
<img alt="" src="./images/eq1.png" class="img-fluid"><br/>
<b>Fig. 3. Speed-Torque characteristics of an ac Servomotor</b>
</div>

Let's choose $(E\_0, \\dot{\\theta}\_0)$ as the operating point of the AC servomotor. Expanding equation (1) about this operating point using a Taylor series expansion, we get:

$$T_m = T_{m0} + \frac{\partial T_{m}}{\partial E}\bigg|_{\dot{\theta}_{0}, E_{0}}(E - E_{0}) + \frac{\partial T_{m}}{\partial \dot{\theta}}\bigg|_{\dot{\theta}_{0}, E_{0}}(\dot{\theta} - \dot{\theta}_{0}) \tag{2}$$

Here, higher-order terms are neglected.

Let:

  * $J$ = Moment of inertia of the rotor and disc
  * $f$ = Coefficient of viscous friction
  * $T\_L$ = Load torque

Define the partial derivatives as:

$$K = \frac{\partial T_{m}}{\partial E}\bigg|_{\dot{\theta}_{0}, E_{0}}$$

$$f_{0} = -\frac{\partial T_{m}}{\partial \dot{\theta}}\bigg|_{\dot{\theta}_{0}, E_{0}}$$

The steady-state torque equation at the operating point is:

$$T_{m0} = J\ddot{\theta}_{0} + f\dot{\theta}_{0} + T_L \tag{3}$$

The dynamic torque equation is:

$$T_m = J(\ddot{\theta}_{0} + \Delta\ddot{\theta}) + f(\dot{\theta}_{0} + \Delta\dot{\theta}) + T_L \tag{4}$$

In view of (2), (3), and (4), the torque equation in incremental notation can be written as:

$$\Delta T_m = J\Delta\ddot{\theta} + f\Delta\dot{\theta} = K\Delta E - f_0\Delta\dot{\theta} \tag{5}$$

From this, the incremental motor transfer function is:

$$G_m(s) = \frac{\theta(s)}{E(s)} = \frac{K}{s[Js+(f+f_{0})]} \tag{6}$$

This can be simplified to:

$$G_m(s) = \frac{K_m}{s(\tau_m s+1)} \tag{7}$$

where,

$$K_m = \frac{K}{f+f_0} \quad \text{and} \quad \tau_m = \frac{J}{f+f_0} \tag{8}$$

$K\_m$ is the DC gain of the system, and $\\tau\_m$ is the motor time constant.

$K = \\frac{\\text{Change in torque in N-m}}{\\text{Change in control phase voltage } E \\text{ (volts)}}$ at a constant speed in rad/sec.

$f\_0 = -\\frac{\\text{Change in torque in N-m}}{\\text{Change in speed (rad/sec)}}$ at a constant control phase voltage $E$ (volts).

For linear analysis, the torque-speed curves of a two-phase induction motor are approximated by straight lines, as shown in Fig. 4.

<br/>
<div align="center">
<img alt="" src="./images/eq3.png" class="img-fluid"><br/>
<b>Fig. 4. Linear analysis of the torque – speed curves of a two phase induction motor</b>
</div><br/>

**Calculation for $K\_m$ and $\\tau\_m$ from a graph**

<div align="center">
<img alt="" src="./images/fig5.png" class="img-fluid"><br/>
<b>Fig. 5. Calculation for <i style="font-family:'Bodoni MT'">K<sub>m</sub></i> and <i style="font-family:'Bodoni MT'">&tau;<sub>m</sub></i></b>
</div><br/>

Choose an operating point from the experimental torque vs. speed graph. Consider operating point **A** ($T\_A$ gm-cm, $S\_A$ rad/sec) for a control phase voltage of 180 V. Let **C** be the torque at constant speed $S\_A$ rad/sec for a control voltage of 200 V.

The value of $K$ is calculated as:

$$K = \frac{(C - T_A) \times (9.81 \times 10^{-5})}{(200 - 180)} \text{ N-m/volt} \tag{9}$$

Now, consider the slope of the line **AD** for a constant control phase voltage of 180 V. Let **D** be a point with torque $T\_D$ gm-cm at speed $S\_D$ rad/sec.

The value of $-f\_0$ (the slope) is:

$$-f_0 = \frac{(T_D - T_A) \times (9.81 \times 10^{-5})}{(S_D - S_A)} \text{ N-m/(rad/sec)} \tag{10}$$

Note that $f\_0$ is positive for a negative slope and negative for a positive slope.

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>	
